// Little inline-SVG illustrations of the PlayStation consoles + a DualShock-style
// controller, drawn (not photographed) so they're self-contained and ship with
// the launcher. Used as the tile icon for the PS2 / PS3 console arcades.

const stroke = 'rgba(255,255,255,0.28)';
const body = '#0b1020';
const detail = 'rgba(255,255,255,0.14)';
const btn = '#9fb2d6';

function Controller() {
  return (
    <g transform="translate(0,6)">
      {/* grips + body */}
      <ellipse cx="31" cy="74" rx="8.5" ry="9.5" fill={body} stroke={stroke} strokeWidth="1.4" />
      <ellipse cx="69" cy="74" rx="8.5" ry="9.5" fill={body} stroke={stroke} strokeWidth="1.4" />
      <rect x="28" y="61" width="44" height="15" rx="7.5" fill={body} stroke={stroke} strokeWidth="1.4" />
      {/* thumbsticks */}
      <circle cx="42" cy="73" r="3.2" fill="#334155" stroke={detail} />
      <circle cx="58" cy="73" r="3.2" fill="#334155" stroke={detail} />
      {/* d-pad */}
      <rect x="35.6" y="64.5" width="2.3" height="7" rx="1" fill={btn} />
      <rect x="33.4" y="66.7" width="7" height="2.3" rx="1" fill={btn} />
      {/* face buttons */}
      <circle cx="64" cy="66" r="1.5" fill={btn} />
      <circle cx="67.5" cy="68.4" r="1.5" fill={btn} />
      <circle cx="64" cy="70.8" r="1.5" fill={btn} />
      <circle cx="60.5" cy="68.4" r="1.5" fill={btn} />
    </g>
  );
}

export function ConsoleArt({ kind }: { kind: string }) {
  if (kind === 'ps2') {
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-hidden>
        {/* fat PS2 slab */}
        <rect x="12" y="15" width="76" height="30" rx="5" fill={body} stroke={stroke} strokeWidth="1.6" />
        <line x1="18" y1="23" x2="60" y2="23" stroke={detail} strokeWidth="2.2" />
        <line x1="18" y1="29" x2="60" y2="29" stroke={detail} strokeWidth="2.2" />
        <line x1="18" y1="35" x2="60" y2="35" stroke={detail} strokeWidth="2.2" />
        <rect x="66" y="21" width="16" height="4" rx="2" fill="#38bdf8" />
        <circle cx="82" cy="39" r="2.4" fill="#38bdf8" />
        <Controller />
      </svg>
    );
  }
  if (kind === 'ps3') {
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-hidden>
        {/* PS3 super-slim: curved top slab */}
        <path
          d="M14 45 v-6 q0 -13 12 -17 q24 -7 48 0 q12 4 12 17 v6 z"
          fill={body}
          stroke={stroke}
          strokeWidth="1.6"
        />
        <path d="M22 30 q28 -8 56 0" fill="none" stroke={detail} strokeWidth="1.8" />
        <path d="M22 35 q28 -7 56 0" fill="none" stroke={detail} strokeWidth="1.8" />
        <circle cx="50" cy="41" r="2.2" fill="#22c55e" />
        <Controller />
      </svg>
    );
  }
  return null;
}
