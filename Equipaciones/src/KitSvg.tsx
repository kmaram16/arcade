// Dibuja una equipación completa (camiseta + pantalón + medias) en SVG puro.
// Se usa tanto en la vista grande del estudio como en las miniaturas de las
// equipaciones favoritas, así que todos los ids llevan un prefijo único.

import type { Kit } from './data';
import { textOn } from './data';

export type View = 'front' | 'back';

// Silueta de la camiseta (cuerpo + mangas + cuello), simétrica en x=120.
const SHIRT =
  'M96,44 Q84,46 72,50 L34,74 L52,116 L74,104 L78,232 Q80,244 92,244 ' +
  'L148,244 Q160,244 162,232 L166,104 L188,116 L206,74 L168,50 ' +
  'Q156,46 144,44 Q120,60 96,44 Z';

// Caja que cubre la camiseta para pintar los patrones dentro (recortada por SHIRT).
const BOX = { x: 30, y: 42, w: 180, h: 206 };

function Fill({ kit, gid }: { kit: Kit; gid: string }) {
  const { pattern, primary: c1, secondary: c2 } = kit;
  const { x, y, w, h } = BOX;
  const base = <rect x={x} y={y} width={w} height={h} fill={c1} />;

  switch (pattern) {
    case 'solid':
      return base;

    case 'gradient':
      return (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c1} />
              <stop offset="100%" stopColor={c2} />
            </linearGradient>
          </defs>
          <rect x={x} y={y} width={w} height={h} fill={`url(#${gid})`} />
        </>
      );

    case 'stripes': {
      const n = 7;
      const sw = w / n;
      return (
        <>
          {base}
          {Array.from({ length: n }).map((_, i) =>
            i % 2 === 1 ? (
              <rect key={i} x={x + i * sw} y={y} width={sw} height={h} fill={c2} />
            ) : null
          )}
        </>
      );
    }

    case 'pinstripes': {
      const gap = 12;
      const n = Math.ceil(w / gap);
      return (
        <>
          {base}
          {Array.from({ length: n }).map((_, i) => (
            <rect key={i} x={x + i * gap + 4} y={y} width={2.4} height={h} fill={c2} />
          ))}
        </>
      );
    }

    case 'hoops': {
      const n = 8;
      const hh = h / n;
      return (
        <>
          {base}
          {Array.from({ length: n }).map((_, i) =>
            i % 2 === 1 ? (
              <rect key={i} x={x} y={y + i * hh} width={w} height={hh} fill={c2} />
            ) : null
          )}
        </>
      );
    }

    case 'halves':
      return (
        <>
          <rect x={x} y={y} width={w / 2} height={h} fill={c1} />
          <rect x={x + w / 2} y={y} width={w / 2} height={h} fill={c2} />
        </>
      );

    case 'sash':
      return (
        <>
          {base}
          <line x1={x} y1={y + h} x2={x + w} y2={y} stroke={c2} strokeWidth={34} />
        </>
      );

    case 'checkers': {
      const cols = 6;
      const rows = 8;
      const cw = w / cols;
      const ch = h / rows;
      const cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if ((r + c) % 2 === 0) {
            cells.push(
              <rect
                key={`${r}-${c}`}
                x={x + c * cw}
                y={y + r * ch}
                width={cw}
                height={ch}
                fill={c2}
              />
            );
          }
        }
      }
      return (
        <>
          {base}
          {cells}
        </>
      );
    }

    default:
      return base;
  }
}

export default function KitSvg({
  kit,
  view = 'front',
  idPrefix
}: {
  kit: Kit;
  view?: View;
  idPrefix: string;
}) {
  const clip = `${idPrefix}-clip`;
  const grad = `${idPrefix}-grad`;
  const shade = `${idPrefix}-shade`;
  const ink = textOn(kit.primary);

  return (
    <svg viewBox="0 0 240 384" className="kit-svg" role="img" aria-label={`Equipación ${kit.teamName}`}>
      <defs>
        <clipPath id={clip}>
          <path d={SHIRT} />
        </clipPath>
        <linearGradient id={shade} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      {/* sombra proyectada de la camiseta */}
      <path d={SHIRT} fill="#000000" opacity="0.22" transform="translate(4,6)" />

      {/* patrón + sombreado de volumen, recortados a la camiseta */}
      <g clipPath={`url(#${clip})`}>
        <Fill kit={kit} gid={grad} />
        <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} fill={`url(#${shade})`} />
      </g>

      {/* contorno */}
      <path d={SHIRT} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2.4" strokeLinejoin="round" />

      {/* cuello, puños y bajo en color de detalle */}
      <path d="M96,44 Q120,62 144,44" fill="none" stroke={kit.accent} strokeWidth="8" strokeLinecap="round" />
      <line x1="34" y1="74" x2="52" y2="116" stroke={kit.accent} strokeWidth="8" strokeLinecap="round" />
      <line x1="206" y1="74" x2="188" y2="116" stroke={kit.accent} strokeWidth="8" strokeLinecap="round" />
      <line x1="84" y1="240" x2="156" y2="240" stroke={kit.accent} strokeWidth="5" strokeLinecap="round" />

      {/* contenido según la cara */}
      {view === 'front' ? (
        <>
          {/* escudo */}
          <g transform="translate(84,96)">
            <path
              d="M0,0 H32 V15 Q32,32 16,40 Q0,32 0,15 Z"
              fill={kit.accent}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.5"
            />
            <text
              x="16"
              y="21"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={kit.crest.length > 2 ? 12 : 17}
              fontWeight={800}
              fontFamily="Sora, Inter, sans-serif"
              fill={textOn(kit.accent)}
            >
              {kit.crest.slice(0, 3)}
            </text>
          </g>
          {/* dorsal pequeño en el pecho */}
          <text
            x="150"
            y="122"
            textAnchor="middle"
            fontSize="26"
            fontWeight={800}
            fontFamily="Sora, Inter, sans-serif"
            fill={ink}
            paintOrder="stroke"
            stroke="rgba(0,0,0,0.28)"
            strokeWidth="1"
          >
            {kit.number}
          </text>
          {/* patrocinador */}
          {kit.sponsor ? (
            <text
              x="120"
              y="168"
              textAnchor="middle"
              fontSize="16"
              fontWeight={700}
              letterSpacing="1"
              fontFamily="Inter, sans-serif"
              fill={ink}
              paintOrder="stroke"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="0.8"
            >
              {kit.sponsor.slice(0, 12).toUpperCase()}
            </text>
          ) : null}
        </>
      ) : (
        <>
          {/* nombre del jugador */}
          <text
            x="120"
            y="108"
            textAnchor="middle"
            fontSize="16"
            fontWeight={800}
            letterSpacing="1.5"
            fontFamily="Inter, sans-serif"
            fill={ink}
            paintOrder="stroke"
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="1"
          >
            {(kit.playerName || '').slice(0, 12).toUpperCase()}
          </text>
          {/* dorsal grande */}
          <text
            x="120"
            y="205"
            textAnchor="middle"
            fontSize="96"
            fontWeight={800}
            fontFamily="Sora, Inter, sans-serif"
            fill={ink}
            paintOrder="stroke"
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="2"
          >
            {kit.number}
          </text>
        </>
      )}

      {/* ------- pantalón ------- */}
      <g transform="translate(36,272)">
        <path
          d="M2,6 Q2,0 8,0 H68 Q74,0 74,6 V20 Q74,86 54,86 H44 L38,54 L32,86 H22 Q2,86 2,20 Z"
          fill={kit.shorts}
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <rect x="7" y="3" width="62" height="7" rx="3" fill={kit.accent} />
        <rect x="6" y="14" width="4.5" height="66" fill={kit.accent} opacity="0.85" />
        <rect x="63.5" y="14" width="4.5" height="66" fill={kit.accent} opacity="0.85" />
      </g>

      {/* ------- medias ------- */}
      <g transform="translate(150,276)">
        {[0, 26].map((dx) => (
          <g key={dx} transform={`translate(${dx},0)`}>
            <path
              d="M0,0 H20 V64 Q20,80 10,80 Q0,80 0,64 Z"
              fill={kit.socks}
              stroke="rgba(0,0,0,0.4)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <rect x="0.5" y="10" width="19" height="11" fill={kit.accent} />
          </g>
        ))}
      </g>
    </svg>
  );
}
