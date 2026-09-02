// Reusable console-gamepad support, shared verbatim across the arcade games.
//
// It polls the Gamepad API each frame and turns a controller into the inputs a
// game already understands: the D-pad / left stick fire directional callbacks
// (with auto-repeat, so you can both steer AND scrub through menus), and the
// face/shoulder buttons fire named one-shot callbacks. Drop this file into a
// game and call startGamepad({...}) once on mount; it returns a stop function.
//
// Standard-mapping layout (Xbox-style): A=0 B=1 X=2 Y=3 LB=4 RB=5 Back=8 Start=9,
// D-pad = 12–15, left stick = axes 0/1.

export type Dir = 'up' | 'down' | 'left' | 'right';
export type PadBtn = 'A' | 'B' | 'X' | 'Y' | 'LB' | 'RB' | 'L2' | 'R2' | 'back' | 'start';

type Opts = {
  /** Fired on D-pad/stick press and then repeatedly while held. */
  onDir?: (dir: Dir) => void;
  /** Fired once on the leading edge of a button press. */
  onButton?: (btn: PadBtn) => void;
  repeatMs?: number;
  firstRepeatMs?: number;
  deadzone?: number;
};

const BTN: Record<number, PadBtn> = {
  0: 'A',
  1: 'B',
  2: 'X',
  3: 'Y',
  4: 'LB',
  5: 'RB',
  8: 'back',
  9: 'start'
};

const DIRS: Dir[] = ['up', 'down', 'left', 'right'];

export function startGamepad(opts: Opts): () => void {
  const repeatMs = opts.repeatMs ?? 130;
  const firstRepeatMs = opts.firstRepeatMs ?? 300;
  const dz = opts.deadzone ?? 0.5;

  let raf = 0;
  const prevBtn: boolean[] = [];
  const held: Record<Dir, boolean> = { up: false, down: false, left: false, right: false };
  const nextFire: Record<Dir, number> = { up: 0, down: 0, left: 0, right: 0 };

  const step = () => {
    const pads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
    let gp: Gamepad | null = null;
    for (const p of pads) {
      if (p) {
        gp = p;
        break;
      }
    }
    if (gp) {
      const now = performance.now();

      gp.buttons.forEach((b, i) => {
        const pressed = b.pressed;
        if (pressed && !prevBtn[i] && BTN[i] !== undefined) opts.onButton?.(BTN[i]);
        prevBtn[i] = pressed;
      });

      const ax = gp.axes[0] ?? 0;
      const ay = gp.axes[1] ?? 0;
      const active: Record<Dir, boolean> = {
        up: (gp.buttons[12]?.pressed ?? false) || ay < -dz,
        down: (gp.buttons[13]?.pressed ?? false) || ay > dz,
        left: (gp.buttons[14]?.pressed ?? false) || ax < -dz,
        right: (gp.buttons[15]?.pressed ?? false) || ax > dz
      };
      for (const d of DIRS) {
        if (active[d]) {
          if (!held[d]) {
            held[d] = true;
            nextFire[d] = now + firstRepeatMs;
            opts.onDir?.(d);
          } else if (now >= nextFire[d]) {
            nextFire[d] = now + repeatMs;
            opts.onDir?.(d);
          }
        } else {
          held[d] = false;
        }
      }
    }
    raf = requestAnimationFrame(step);
  };

  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

// ——— Key-bridge mode ———
//
// For games driven by continuous keyboard input (hold ArrowUp to keep moving),
// discrete callbacks feel steppy. bridgeGamepadToKeys() instead turns the
// controller into synthetic keyboard events, so a game's EXISTING keydown/keyup
// handlers work with a pad and no game-logic change: directions map to held
// keydown/keyup, buttons fire a keydown+keyup pulse.

export type PadInput = Dir | PadBtn;
export type KeyMap = Partial<Record<PadInput, string>>;

const BTN_INDEX: Record<PadBtn, number> = {
  A: 0,
  B: 1,
  X: 2,
  Y: 3,
  LB: 4,
  RB: 5,
  L2: 6,
  R2: 7,
  back: 8,
  start: 9
};

function codeFor(key: string): string {
  if (key.startsWith('Arrow')) return key;
  if (key === ' ') return 'Space';
  if (key === 'Enter') return 'Enter';
  if (key.length === 1) return `Key${key.toUpperCase()}`;
  return key;
}

function fireKey(type: 'keydown' | 'keyup', key: string) {
  const ev = new KeyboardEvent(type, { key, code: codeFor(key), bubbles: true, cancelable: true });
  window.dispatchEvent(ev);
}

export function bridgeGamepadToKeys(map: KeyMap, deadzone = 0.5): () => void {
  let raf = 0;
  const down: Partial<Record<PadInput, boolean>> = {};

  const set = (input: PadInput, active: boolean) => {
    const key = map[input];
    if (!key) return;
    if (active && !down[input]) {
      down[input] = true;
      fireKey('keydown', key);
    } else if (!active && down[input]) {
      down[input] = false;
      fireKey('keyup', key);
    }
  };

  const step = () => {
    const pads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
    let gp: Gamepad | null = null;
    for (const p of pads) {
      if (p) {
        gp = p;
        break;
      }
    }
    if (gp) {
      const ax = gp.axes[0] ?? 0;
      const ay = gp.axes[1] ?? 0;
      set('up', (gp.buttons[12]?.pressed ?? false) || ay < -deadzone);
      set('down', (gp.buttons[13]?.pressed ?? false) || ay > deadzone);
      set('left', (gp.buttons[14]?.pressed ?? false) || ax < -deadzone);
      set('right', (gp.buttons[15]?.pressed ?? false) || ax > deadzone);
      (Object.keys(BTN_INDEX) as PadBtn[]).forEach((b) => set(b, gp!.buttons[BTN_INDEX[b]]?.pressed ?? false));
    }
    raf = requestAnimationFrame(step);
  };

  raf = requestAnimationFrame(step);
  return () => {
    cancelAnimationFrame(raf);
    // Release anything still held so a key doesn't get stuck down on unmount.
    (Object.keys(down) as PadInput[]).forEach((k) => {
      if (down[k] && map[k]) fireKey('keyup', map[k] as string);
    });
  };
}
