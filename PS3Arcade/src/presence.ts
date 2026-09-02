// Real "who's here right now" presence for a static site — no backend needed.
//
// Every open arcade screen connects to a free public MQTT broker over WebSocket,
// publishes a small heartbeat with a random id + which room it's in every few
// seconds, and listens to the same topic. We keep a map of ids heard in the last
// ~12s, so its size is the count of people actually online worldwide right now.
// If the broker can't be reached, `connected` stays false and the caller shows a
// fallback estimate instead.

import mqtt from 'mqtt';

const BROKER = 'wss://broker.emqx.io:8084/mqtt';
const TOPIC = 'kmm-arcade/presence';

export type Presence = { total: number; rooms: Record<string, number>; connected: boolean };

export function startPresence(room: string, onUpdate: (p: Presence) => void): () => void {
  const myId = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const seen = new Map<string, { room: string; ts: number }>();
  let connected = false;
  let hb: number | undefined;
  let client: mqtt.MqttClient | null = null;

  const emit = () => {
    const rooms: Record<string, number> = {};
    for (const v of seen.values()) rooms[v.room] = (rooms[v.room] ?? 0) + 1;
    onUpdate({ total: Math.max(1, seen.size), rooms, connected });
  };

  try {
    client = mqtt.connect(BROKER, {
      clientId: 'kmm-' + myId,
      keepalive: 30,
      reconnectPeriod: 5000,
      connectTimeout: 8000,
      clean: true
    });
    client.on('connect', () => {
      connected = true;
      client!.subscribe(TOPIC);
      const beat = () => {
        if (client && client.connected) client.publish(TOPIC, JSON.stringify({ id: myId, room }));
      };
      beat();
      hb = window.setInterval(beat, 4000);
      emit();
    });
    client.on('message', (_t, payload) => {
      try {
        const m = JSON.parse(payload.toString());
        if (m && typeof m.id === 'string') {
          seen.set(m.id, { room: typeof m.room === 'string' ? m.room : 'arcade', ts: Date.now() });
        }
      } catch {
        /* ignore malformed */
      }
    });
    client.on('error', () => {
      connected = false;
    });
    client.on('close', () => {
      connected = false;
    });
  } catch {
    connected = false;
  }

  // Drop stale ids and refresh the count every 2s.
  const prune = window.setInterval(() => {
    const cut = Date.now() - 12000;
    for (const [k, v] of seen) if (v.ts < cut) seen.delete(k);
    emit();
  }, 2000);

  return () => {
    if (hb) window.clearInterval(hb);
    window.clearInterval(prune);
    try {
      client?.end(true);
    } catch {
      /* ignore */
    }
  };
}
