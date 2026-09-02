// Real-time "who's here" + chat + call signaling for the arcade, over a free
// public MQTT broker (no backend). Presence carries each person's name; direct
// messages and WebRTC call signals are delivered to per-user inbox topics.
//
// Everyone shares the SAME presence topic as presence.ts, so the live count stays
// consistent across every arcade screen.

import mqtt from 'mqtt';

const BROKER = 'wss://broker.emqx.io:8084/mqtt';
const PRES = 'kmm-arcade/presence';
const NS = 'kmm-arcade/chat';

export type Peer = { id: string; name: string; ts: number };
export type ChatMsg = {
  mid: string;
  from: string;
  fromName: string;
  conv: string;
  parts: string[];
  text: string;
  ts: number;
};
export type SigPayload = {
  t: 'offer' | 'answer' | 'ice' | 'bye';
  sdp?: RTCSessionDescriptionInit;
  candidate?: RTCIceCandidateInit;
  video?: boolean;
};
export type Signal = { from: string; fromName: string; to: string; sig: SigPayload };

type Handlers = {
  onCount?: (total: number, connected: boolean) => void;
  onRoster?: (peers: Peer[]) => void;
  onMessage?: (m: ChatMsg) => void;
  onSignal?: (s: Signal) => void;
};

export class Net {
  readonly id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  name = '';
  room = 'arcade';
  connected = false;
  private client: mqtt.MqttClient | null = null;
  private peers = new Map<string, Peer>();
  private hb?: number;
  private prune?: number;
  private h: Handlers = {};

  constructor(name: string, room = 'arcade') {
    this.name = name;
    this.room = room;
  }

  on(h: Handlers) {
    this.h = h;
    return this;
  }

  setName(name: string) {
    this.name = name;
    this.beat();
  }

  private beat() {
    if (this.client && this.client.connected) {
      this.client.publish(PRES, JSON.stringify({ id: this.id, room: this.room, name: this.name }));
    }
  }

  private emit() {
    this.h.onCount?.(Math.max(1, this.peers.size), this.connected);
    this.h.onRoster?.([...this.peers.values()].sort((a, b) => (a.name || '~').localeCompare(b.name || '~')));
  }

  start() {
    const c = mqtt.connect(BROKER, { clientId: 'kmm-' + this.id, keepalive: 30, reconnectPeriod: 5000, clean: true });
    this.client = c;
    c.on('connect', () => {
      this.connected = true;
      c.subscribe(PRES);
      c.subscribe(`${NS}/inbox/${this.id}`);
      this.beat();
      this.hb = window.setInterval(() => this.beat(), 4000);
      this.emit();
    });
    c.on('message', (topic, payload) => {
      try {
        const m = JSON.parse(payload.toString());
        if (topic === PRES) {
          if (m && typeof m.id === 'string') {
            this.peers.set(m.id, { id: m.id, name: typeof m.name === 'string' ? m.name : '', ts: Date.now() });
            this.emit();
          }
        } else if (m && m.kind === 'msg' && m.msg) {
          this.h.onMessage?.(m.msg as ChatMsg);
        } else if (m && m.kind === 'sig') {
          this.h.onSignal?.({ from: m.from, fromName: m.fromName, to: m.to, sig: m.sig });
        }
      } catch {
        /* ignore malformed */
      }
    });
    c.on('error', () => {
      this.connected = false;
    });
    c.on('close', () => {
      this.connected = false;
    });
    this.prune = window.setInterval(() => {
      const cut = Date.now() - 12000;
      let changed = false;
      for (const [k, v] of this.peers) if (v.ts < cut) {
        this.peers.delete(k);
        changed = true;
      }
      if (changed) this.emit();
    }, 3000);
  }

  /** Everyone currently online except me. */
  others(): Peer[] {
    return [...this.peers.values()].filter((p) => p.id !== this.id);
  }

  nameOf(id: string): string {
    if (id === this.id) return this.name || '';
    return this.peers.get(id)?.name || '';
  }

  /** Send a text message to a conversation (list of participant ids incl. me). */
  send(parts: string[], text: string): ChatMsg {
    const conv = [...parts].sort().join('|');
    const msg: ChatMsg = {
      mid: Math.random().toString(36).slice(2),
      from: this.id,
      fromName: this.name,
      conv,
      parts,
      text,
      ts: Date.now()
    };
    for (const pid of parts) {
      if (pid !== this.id) this.client?.publish(`${NS}/inbox/${pid}`, JSON.stringify({ kind: 'msg', msg }));
    }
    this.h.onMessage?.(msg); // local echo
    return msg;
  }

  /** Send a WebRTC call signal to one peer. */
  signal(to: string, sig: SigPayload) {
    this.client?.publish(`${NS}/inbox/${to}`, JSON.stringify({ kind: 'sig', from: this.id, fromName: this.name, to, sig }));
  }

  stop() {
    if (this.hb) window.clearInterval(this.hb);
    if (this.prune) window.clearInterval(this.prune);
    try {
      this.client?.end(true);
    } catch {
      /* ignore */
    }
  }
}

/** Conversation id for a set of participant ids (order-independent). */
export function convId(parts: string[]): string {
  return [...parts].sort().join('|');
}
