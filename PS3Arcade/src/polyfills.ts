// Minimal Node-global shims so the browser mqtt client (real presence) runs.
// Imported first in main.tsx, before anything that pulls in mqtt.
import { Buffer } from 'buffer';

const g = globalThis as unknown as { global?: unknown; Buffer?: unknown };
if (!g.global) g.global = globalThis;
if (!g.Buffer) g.Buffer = Buffer;
