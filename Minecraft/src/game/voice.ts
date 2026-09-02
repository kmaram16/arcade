// Peer-to-peer voice chat over WebRTC.
//
// Every player captures their mic once, then opens a direct RTCPeerConnection to
// each other player in the room (a small full mesh). The relay only carries the
// handshake (offer/answer/ICE) via Net.signal — the actual audio flows P2P.
//
// Glare (both sides offering at once) is avoided with a deterministic rule: of
// any pair, only the peer with the larger id makes the offer.

import { Net } from './net';

type SignalData = { sdp?: RTCSessionDescriptionInit; ice?: RTCIceCandidateInit };

const RTC_CONFIG: RTCConfiguration = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

export class Voice {
  private readonly net: Net;
  private local?: MediaStream;
  private readonly pcs = new Map<string, RTCPeerConnection>();
  private readonly audios = new Map<string, HTMLAudioElement>();
  active = false;
  muted = false;
  onError?: (msg: string) => void;
  onPeerSpeaking?: (id: string, speaking: boolean) => void;

  constructor(net: Net) {
    this.net = net;
  }

  /** Ask for the mic. Returns false (and reports) if denied / unavailable. */
  async start(): Promise<boolean> {
    if (this.active) return true;
    try {
      this.local = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      this.active = true;
      return true;
    } catch {
      this.onError?.('No se pudo abrir el micrófono (permiso denegado o no disponible).');
      return false;
    }
  }

  /** Open (or reuse) a connection to a peer. initiator = we make the offer. */
  connectPeer(peerId: string) {
    if (!this.local || this.pcs.has(peerId)) return;
    const initiator = this.net.myId > peerId; // deterministic: only one side offers
    const pc = new RTCPeerConnection(RTC_CONFIG);
    this.pcs.set(peerId, pc);

    for (const track of this.local.getTracks()) pc.addTrack(track, this.local);

    pc.onicecandidate = (e) => {
      if (e.candidate) this.net.signal(peerId, { ice: e.candidate.toJSON() });
    };
    pc.ontrack = (e) => this.attach(peerId, e.streams[0]);
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'failed' || pc.connectionState === 'closed') this.removePeer(peerId);
    };
    if (initiator) {
      pc.onnegotiationneeded = async () => {
        try {
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          this.net.signal(peerId, { sdp: pc.localDescription?.toJSON() });
        } catch { /* renegotiation will retry */ }
      };
    }
  }

  /** Handle a relayed handshake blob from a peer. */
  async onSignal(from: string, raw: unknown) {
    if (!this.local) return;
    const data = raw as SignalData;
    let pc = this.pcs.get(from);
    if (!pc) {
      this.connectPeer(from);
      pc = this.pcs.get(from);
    }
    if (!pc) return;
    try {
      if (data.sdp) {
        await pc.setRemoteDescription(data.sdp);
        if (data.sdp.type === 'offer') {
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          this.net.signal(from, { sdp: pc.localDescription?.toJSON() });
        }
      } else if (data.ice) {
        await pc.addIceCandidate(data.ice);
      }
    } catch { /* stray/duplicate candidate — safe to ignore */ }
  }

  private attach(id: string, stream: MediaStream) {
    let audio = this.audios.get(id);
    if (!audio) {
      audio = new Audio();
      audio.autoplay = true;
      this.audios.set(id, audio);
    }
    audio.srcObject = stream;
    audio.play().catch(() => { /* autoplay may need a user gesture */ });
  }

  removePeer(id: string) {
    const pc = this.pcs.get(id);
    if (pc) { try { pc.close(); } catch { /* already closed */ } }
    this.pcs.delete(id);
    const audio = this.audios.get(id);
    if (audio) audio.srcObject = null;
    this.audios.delete(id);
  }

  setMuted(muted: boolean) {
    this.muted = muted;
    this.local?.getAudioTracks().forEach((t) => { t.enabled = !muted; });
  }

  stop() {
    for (const id of [...this.pcs.keys()]) this.removePeer(id);
    this.local?.getTracks().forEach((t) => t.stop());
    this.local = undefined;
    this.active = false;
  }
}
