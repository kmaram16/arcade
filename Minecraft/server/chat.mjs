// Real-time multiplayer relay for "Minecraft from KMM".
//
// One tiny WebSocket server that lets people on ANY device/browser actually play
// together. It handles four things, all grouped into shareable "rooms":
//   • presence + chat   — who's really online, and live text messages
//   • shared world      — block edits (place/break) relayed and remembered, so a
//                         late joiner catches up to what's already been built
//   • player state      — each player's position/look, relayed for avatars
//   • voice signalling   — relays WebRTC offer/answer/ICE so mics connect P2P
//
// It binds on 0.0.0.0, so a phone/tablet/another PC on the same Wi-Fi can reach
// it at ws://<this-pc-ip>:4189. To go beyond the LAN (a friend across the
// internet), expose this port with a tunnel — e.g. `cloudflared tunnel --url
// http://localhost:4189` — and open the game with ?net=wss://<that-host>.

import { WebSocketServer } from 'ws';

const PORT = Number(process.env.CHAT_PORT || process.env.MC_NET_PORT) || 4189;
const MAX_NAME = 16;
const MAX_TEXT = 280;
const MAX_ROOM = 24;
const MAX_EDITS = 60000; // per-room cap on remembered block edits (memory guard)

// room code -> { config, edits: Map<"x,y,z", blockType|null>, peers: Map<ws, peer> }
const rooms = new Map();
let nextId = 1;

// Trim, drop ASCII control chars, and cap the length of anything a client sends.
const clean = (s, max) =>
  String(s ?? '')
    .replace(/\p{Cc}/gu, '')
    .trim()
    .slice(0, max);

function getRoom(code) {
  let r = rooms.get(code);
  if (!r) {
    r = { config: null, edits: new Map(), peers: new Map() };
    rooms.set(code, r);
  }
  return r;
}

const roster = (r) => [...r.peers.values()].map((p) => ({ id: p.id, name: p.name }));
const players = (r) =>
  [...r.peers.values()].map((p) => ({ id: p.id, name: p.name, x: p.x, y: p.y, z: p.z, yaw: p.yaw, pitch: p.pitch }));

function send(ws, obj) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj));
}

/** Send to everyone in a room (optionally skipping one socket). */
function broadcast(r, obj, except) {
  const payload = JSON.stringify(obj);
  for (const peer of r.peers.keys()) {
    if (peer !== except && peer.readyState === peer.OPEN) peer.send(payload);
  }
}

function findSocket(r, id) {
  for (const [ws, p] of r.peers) if (p.id === id) return ws;
  return null;
}

function leave(ws) {
  const r = ws._roomObj;
  if (!r || !r.peers.has(ws)) return;
  const { id, name } = r.peers.get(ws);
  r.peers.delete(ws);
  if (r.peers.size === 0) {
    rooms.delete(ws._room); // last one out: forget the room (and its edits)
  } else {
    broadcast(r, { t: 'peer-leave', id });
    broadcast(r, { t: 'system', text: `${name} se fue`, ts: Date.now() });
    broadcast(r, { t: 'presence', users: roster(r) });
  }
  ws._room = null;
  ws._roomObj = null;
}

const wss = new WebSocketServer({ port: PORT });

// If a relay is already up on this port (e.g. a dev-server restart re-spawned us),
// don't crash with a stack trace — just bow out quietly; the existing one serves.
wss.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`🌍 Multiplayer relay already running on ${PORT} — leaving it be.`);
    process.exit(0);
  }
  console.error('[mc-net]', err.message);
});

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws._room = null;
  ws._roomObj = null;
  ws._id = String(nextId++);
  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return; // ignore non-JSON noise
    }

    if (msg.t === 'join') {
      const room = clean(msg.room, MAX_ROOM) || 'lobby';
      const name = clean(msg.name, MAX_NAME) || `Player${ws._id}`;
      leave(ws); // moving rooms? drop the old membership first
      const r = getRoom(room);
      // The first player to land in a room fixes its world (type + mods) so
      // everyone generates identical terrain; later joiners adopt it.
      if (!r.config && msg.config) r.config = msg.config;
      ws._room = room;
      ws._roomObj = r;
      r.peers.set(ws, { id: ws._id, name, x: 0, y: 0, z: 0, yaw: 0, pitch: 0 });
      send(ws, {
        t: 'welcome',
        id: ws._id,
        room,
        config: r.config,
        edits: [...r.edits.entries()].map(([k, b]) => ({ k, b })),
        players: players(r).filter((p) => p.id !== ws._id)
      });
      broadcast(r, { t: 'peer-join', id: ws._id, name }, ws);
      broadcast(r, { t: 'system', text: `${name} entró`, ts: Date.now() }, ws);
      broadcast(r, { t: 'presence', users: roster(r) });
      return;
    }

    const r = ws._roomObj;
    const me = r && r.peers.get(ws);
    if (!me) return; // must join before anything else

    if (msg.t === 'state') {
      me.x = +msg.x || 0; me.y = +msg.y || 0; me.z = +msg.z || 0;
      me.yaw = +msg.yaw || 0; me.pitch = +msg.pitch || 0;
      broadcast(r, { t: 'peer-state', id: me.id, x: me.x, y: me.y, z: me.z, yaw: me.yaw, pitch: me.pitch }, ws);
    } else if (msg.t === 'edit') {
      const k = `${msg.x | 0},${msg.y | 0},${msg.z | 0}`;
      const block = msg.block ?? null; // null = the block was broken
      if (r.edits.has(k) || r.edits.size < MAX_EDITS) r.edits.set(k, block);
      broadcast(r, { t: 'peer-edit', id: me.id, x: msg.x | 0, y: msg.y | 0, z: msg.z | 0, block }, ws);
    } else if (msg.t === 'chat') {
      const text = clean(msg.text, MAX_TEXT);
      if (text) broadcast(r, { t: 'chat', from: me.id, name: me.name, text, ts: Date.now() });
    } else if (msg.t === 'name') {
      const name = clean(msg.name, MAX_NAME);
      if (name && name !== me.name) {
        const old = me.name;
        me.name = name;
        broadcast(r, { t: 'system', text: `${old} ahora es ${name}`, ts: Date.now() });
        broadcast(r, { t: 'presence', users: roster(r) });
      }
    } else if (msg.t === 'signal') {
      // Relay a WebRTC handshake blob to one specific peer (voice chat).
      const to = findSocket(r, msg.to);
      if (to) send(to, { t: 'signal', from: me.id, data: msg.data });
    }
  });

  ws.on('close', () => leave(ws));
  ws.on('error', () => leave(ws));
});

// Drop sockets that stopped answering pings (closed laptops, dead Wi-Fi, …).
const heartbeat = setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.isAlive === false) {
      ws.terminate();
      continue;
    }
    ws.isAlive = false;
    try { ws.ping(); } catch { /* socket already gone */ }
  }
}, 30000);
wss.on('close', () => clearInterval(heartbeat));

console.log(`🌍 Multiplayer relay on ws://0.0.0.0:${PORT} (rooms · world sync · chat · voice signalling)`);
