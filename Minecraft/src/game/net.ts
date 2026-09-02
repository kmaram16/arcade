// Client-side networking for shared-world multiplayer.
//
// A thin wrapper over a WebSocket to the relay (server/chat.mjs): it joins a
// room, streams our player state + block edits, and fans incoming messages out
// to typed callbacks the App wires into the engine, chat UI and voice layer.
//
// The relay URL defaults to ws://<this-host>:4189 (the port the dev server boots
// it on). Override with ?net=wss://<host> to play across the internet via a tunnel.

import { BlockType } from './blocks';
import { WorldType } from './world';

export type NetConfig = { worldType: WorldType; mods: string[] };
export type PeerState = { id: string; name: string; x: number; y: number; z: number; yaw: number; pitch: number };
export type NetStatus = 'connecting' | 'open' | 'closed';

export interface NetEvents {
  onStatus: (s: NetStatus) => void;
  /** Room joined: adopt config, replay existing edits, learn who's already here. */
  onWelcome: (id: string, config: NetConfig | null, edits: { k: string; b: BlockType | null }[], players: PeerState[]) => void;
  onPeerJoin: (id: string, name: string) => void;
  onPeerLeave: (id: string) => void;
  onPeerState: (id: string, x: number, y: number, z: number, yaw: number, pitch: number) => void;
  onPeerEdit: (id: string, x: number, y: number, z: number, block: BlockType | null) => void;
  onChat: (from: string, name: string, text: string, ts: number) => void;
  onSystem: (text: string, ts: number) => void;
  onPresence: (users: { id: string; name: string }[]) => void;
  /** A WebRTC handshake blob relayed from another peer (voice). */
  onSignal: (from: string, data: unknown) => void;
}

export class Net {
  private ws?: WebSocket;
  private readonly url: string;
  private readonly ev: NetEvents;
  myId = '';

  constructor(ev: NetEvents, url?: string) {
    this.ev = ev;
    this.url = url || Net.defaultUrl();
  }

  static defaultUrl(): string {
    const override = new URLSearchParams(location.search).get('net');
    if (override) return override;
    // Same origin as the page, path /ws — Vite proxies it to the relay. This way
    // ONE address (localhost, a LAN IP, or a public tunnel domain) works for
    // everyone: friends across the internet just open your shared tunnel link.
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    return `${proto}://${location.host || 'localhost:4188'}/ws`;
  }

  connect(room: string, name: string, config: NetConfig) {
    this.ev.onStatus('connecting');
    let ws: WebSocket;
    try {
      ws = new WebSocket(this.url);
    } catch {
      this.ev.onStatus('closed');
      return;
    }
    this.ws = ws;
    ws.onopen = () => {
      this.send({ t: 'join', room, name, config });
      this.ev.onStatus('open');
    };
    ws.onclose = () => this.ev.onStatus('closed');
    ws.onerror = () => this.ev.onStatus('closed');
    ws.onmessage = (e) => {
      let m: Record<string, unknown>;
      try {
        m = JSON.parse(e.data as string);
      } catch {
        return;
      }
      this.dispatch(m);
    };
  }

  private dispatch(m: Record<string, unknown>) {
    switch (m.t) {
      case 'welcome':
        this.myId = m.id as string;
        this.ev.onWelcome(
          m.id as string,
          (m.config as NetConfig | null) ?? null,
          (m.edits as { k: string; b: BlockType | null }[]) ?? [],
          (m.players as PeerState[]) ?? []
        );
        break;
      case 'peer-join':
        this.ev.onPeerJoin(m.id as string, m.name as string);
        break;
      case 'peer-leave':
        this.ev.onPeerLeave(m.id as string);
        break;
      case 'peer-state':
        this.ev.onPeerState(m.id as string, m.x as number, m.y as number, m.z as number, m.yaw as number, m.pitch as number);
        break;
      case 'peer-edit':
        this.ev.onPeerEdit(m.id as string, m.x as number, m.y as number, m.z as number, (m.block as BlockType | null) ?? null);
        break;
      case 'chat':
        this.ev.onChat(m.from as string, m.name as string, m.text as string, m.ts as number);
        break;
      case 'system':
        this.ev.onSystem(m.text as string, m.ts as number);
        break;
      case 'presence':
        this.ev.onPresence((m.users as { id: string; name: string }[]) ?? []);
        break;
      case 'signal':
        this.ev.onSignal(m.from as string, m.data);
        break;
    }
  }

  private send(obj: unknown) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(obj));
  }

  state(x: number, y: number, z: number, yaw: number, pitch: number) {
    this.send({ t: 'state', x, y, z, yaw, pitch });
  }
  edit(x: number, y: number, z: number, block: BlockType | null) {
    this.send({ t: 'edit', x, y, z, block });
  }
  chat(text: string) {
    this.send({ t: 'chat', text });
  }
  signal(to: string, data: unknown) {
    this.send({ t: 'signal', to, data });
  }
  close() {
    try { this.ws?.close(); } catch { /* already closed */ }
    this.ws = undefined;
  }
}
