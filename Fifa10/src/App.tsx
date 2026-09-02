import { useEffect, useRef, useState } from 'react';
import { TEAMS, textOn, type Team } from './teams';
import './App.css';

// ===== The pitch =====
const W = 640; // field width
const H = 400; // field height

const BALL_R = 7;
const PLAYER_R = 13;
const GK_R = 15;

const PLAYER_SPEED = 3.7; // the player you're controlling
const FORM_SPEED = 2.7; // teammates jogging back into formation
const PRESS_SPEED = 3.15; // the opponent chasing the ball
const GK_SPEED = 2.8;

const BALL_FRICTION = 0.99;
const BALL_MAX = 13;
const DRIBBLE = 1.5;
const SHOOT_SPEED = 11;
const PASS_SPEED = 8.5;
const CLEAR_SPEED = 8;

const MATCH_SECONDS = 90; // a quick full match
const CELEBRATE_FRAMES = 75;

// Goal mouth centered on each end line.
const GOAL_H = 132;
const GOAL_TOP = (H - GOAL_H) / 2;
const GOAL_BOTTOM = GOAL_TOP + GOAL_H;
const GK_X_LEFT = 38;
const GK_X_RIGHT = W - 38;

// Formation slots as fractions of the field, for a team attacking RIGHT.
// Order matches each squad: [GK, DEF, DEF, MID, FWD].
const SLOTS = [
  { x: 0.06, y: 0.5 }, // GK
  { x: 0.26, y: 0.3 }, // DEF
  { x: 0.26, y: 0.7 }, // DEF
  { x: 0.47, y: 0.5 }, // MID
  { x: 0.66, y: 0.5 } // FWD
];

const NAMES_KEY = 'fifa10-names';
const WINS_KEY = 'fifa10-wins-by-user';

type Status = 'menu' | 'teams' | 'playing' | 'over';
type Result = 'win' | 'lose' | 'draw';
type Wins = Record<string, number>;
type Side = 'L' | 'R'; // L = defends left / attacks right (you); R = the opposite

type Player = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  slot: number; // index into SLOTS / squad
  num: number;
  name: string;
};

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const dist = (ax: number, ay: number, bx: number, by: number) => Math.hypot(ax - bx, ay - by);

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ---- Match entities (refs so the loop always sees the latest) ----
  const mine = useRef<Player[]>([]); // your team (attacks right)
  const opp = useRef<Player[]>([]); // CPU team (attacks left)
  const ball = useRef({ x: W / 2, y: H / 2, vx: 0, vy: 0 });
  const myTeamRef = useRef<Team>(TEAMS[0]);
  const oppTeamRef = useRef<Team>(TEAMS[1]);

  const myScoreRef = useRef(0);
  const cpuScoreRef = useRef(0);
  const statusRef = useRef<Status>('menu');
  const controlledRef = useRef(4); // which of your outfield players you steer (slot idx)
  const celebrateRef = useRef({ frames: 0, text: '', color: '#fff' });
  const oppKickCd = useRef(0);
  const passCd = useRef(0);
  const clockRef = useRef(MATCH_SECONDS * 60); // counts down in frames

  // Input
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const padRef = useRef({ up: false, down: false, left: false, right: false });
  const shootRef = useRef(false);
  const passRef = useRef(false);
  const pointerRef = useRef({ active: false, x: 0, y: 0 });

  const [status, setStatus] = useState<Status>('menu');
  const [myScore, setMyScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [clock, setClock] = useState(MATCH_SECONDS);
  const [result, setResult] = useState<Result>('win');
  const [activeNum, setActiveNum] = useState(0);

  // Team selection
  const [myTeamId, setMyTeamId] = useState(TEAMS[0].id);
  const [oppTeamId, setOppTeamId] = useState(TEAMS[1].id);

  // Player profiles (shared arcade menu)
  const [wins, setWins] = useState<Wins>({});
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const savedWins: Wins = JSON.parse(localStorage.getItem(WINS_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedWins)]));
    setWins(savedWins);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const myWins = username ? wins[username] || 0 : 0;
  const myTeam = TEAMS.find((t) => t.id === myTeamId) || TEAMS[0];
  const oppTeam = TEAMS.find((t) => t.id === oppTeamId) || TEAMS[1];

  const saveNames = (next: string[]) => {
    setNames(next);
    localStorage.setItem(NAMES_KEY, JSON.stringify(next));
  };
  const addName = () => {
    const n = nameInput.trim();
    if (!n) return;
    if (!names.includes(n)) saveNames([n, ...names]);
    setSelectedName(n);
    setNameInput('');
  };
  const removeName = (n: string) => {
    saveNames(names.filter((x) => x !== n));
    if (wins[n] !== undefined) {
      const next = { ...wins };
      delete next[n];
      setWins(next);
      localStorage.setItem(WINS_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  // Build a team's 5 players at their kickoff formation spots.
  const makeTeam = (team: Team, side: Side): Player[] =>
    team.squad.map((p, slot) => {
      const f = SLOTS[slot];
      const x = side === 'L' ? f.x * W : W - f.x * W;
      return { x, y: f.y * H, vx: 0, vy: 0, slot, num: p.num, name: p.name };
    });

  const kickoff = () => {
    mine.current = makeTeam(myTeamRef.current, 'L');
    opp.current = makeTeam(oppTeamRef.current, 'R');
    ball.current = { x: W / 2, y: H / 2, vx: 0, vy: 0 };
  };

  const goToTeams = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    setStatus('teams');
  };

  const startMatch = () => {
    if (myTeamId === oppTeamId) return;
    myTeamRef.current = myTeam;
    oppTeamRef.current = oppTeam;
    myScoreRef.current = 0;
    cpuScoreRef.current = 0;
    setMyScore(0);
    setCpuScore(0);
    clockRef.current = MATCH_SECONDS * 60;
    setClock(MATCH_SECONDS);
    celebrateRef.current = { frames: 0, text: '', color: '#fff' };
    controlledRef.current = 4;
    setActiveNum(myTeamRef.current.squad[4].num);
    kickoff();
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const endGame = (r: Result) => {
    statusRef.current = 'over';
    setResult(r);
    setStatus('over');
    if (r === 'win' && username) {
      const next = { ...wins, [username]: (wins[username] || 0) + 1 };
      setWins(next);
      localStorage.setItem(WINS_KEY, JSON.stringify(next));
    }
  };

  const toMenu = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // ---- Keyboard: move + Space (shoot) + Shift/F (pass) ----
  useEffect(() => {
    const setKey = (e: KeyboardEvent, down: boolean) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          keysRef.current.up = down;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          keysRef.current.down = down;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          keysRef.current.left = down;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          keysRef.current.right = down;
          break;
        case ' ':
        case 'Spacebar':
          if (down) shootRef.current = true;
          break;
        case 'Shift':
        case 'f':
        case 'F':
          if (down) passRef.current = true;
          break;
        default:
          return;
      }
      e.preventDefault();
    };
    const onDown = (e: KeyboardEvent) => setKey(e, true);
    const onUp = (e: KeyboardEvent) => setKey(e, false);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  const pointerToField = (e: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    pointerRef.current.active = true;
    pointerRef.current.x = (e.clientX - rect.left) * (W / rect.width);
    pointerRef.current.y = (e.clientY - rect.top) * (H / rect.height);
  };
  const endPointer = () => {
    pointerRef.current.active = false;
  };

  // ===== The game loop =====
  useEffect(() => {
    if (status !== 'playing' && status !== 'over') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Crowd dots, generated once so the stands look lively but stable.
    const crowd: { x: number; y: number; c: string }[] = [];
    const palette = ['#e2e8f0', '#fca5a5', '#93c5fd', '#fcd34d', '#86efac', '#f9a8d4'];
    for (let i = 0; i < 260; i++) {
      const top = Math.random() < 0.5;
      crowd.push({
        x: Math.random() * W,
        y: top ? Math.random() * 22 : H - Math.random() * 22,
        c: palette[(Math.random() * palette.length) | 0]
      });
    }

    let raf = 0;

    // Where a player should stand when off the ball (formation, drifting with play).
    const homePos = (slot: number, side: Side) => {
      const f = SLOTS[slot];
      const b = ball.current;
      const fwd = (b.x / W - 0.5) * 130;
      let x = side === 'L' ? f.x * W + fwd : W - f.x * W + fwd;
      const y = f.y * H + (b.y - H / 2) * 0.28;
      x = clamp(x, PLAYER_R, W - PLAYER_R);
      return { x, y: clamp(y, PLAYER_R, H - PLAYER_R) };
    };

    const drive = (p: Player, tx: number, ty: number, speed: number) => {
      const dx = tx - p.x;
      const dy = ty - p.y;
      const len = Math.hypot(dx, dy);
      if (len > 0.5) {
        p.vx = (dx / len) * speed;
        p.vy = (dy / len) * speed;
      } else {
        p.vx = 0;
        p.vy = 0;
      }
      p.x = clamp(p.x + p.vx, PLAYER_R, W - PLAYER_R);
      p.y = clamp(p.y + p.vy, PLAYER_R, H - PLAYER_R);
    };

    const trackGk = (gk: Player, lineX: number) => {
      const b = ball.current;
      const targetY = clamp(b.y, GOAL_TOP - 8, GOAL_BOTTOM + 8);
      const near = Math.abs(b.x - lineX) < 150;
      const targetX = near ? lineX + (lineX < W / 2 ? 16 : -16) : lineX;
      gk.vx = clamp(targetX - gk.x, -GK_SPEED, GK_SPEED);
      gk.vy = clamp(targetY - gk.y, -GK_SPEED, GK_SPEED);
      gk.x += gk.vx;
      gk.y = clamp(gk.y + gk.vy, GK_R, H - GK_R);
    };

    // Push the ball on contact; `kick` (if given) is a hard, aimed strike.
    const contact = (p: Player, radius: number, kick?: { x: number; y: number }) => {
      const b = ball.current;
      const dx = b.x - p.x;
      const dy = b.y - p.y;
      const d = Math.hypot(dx, dy);
      const sum = radius + BALL_R;
      if (d >= sum || d === 0) return false;
      const nx = dx / d;
      const ny = dy / d;
      b.x = p.x + nx * (sum + 0.5);
      b.y = p.y + ny * (sum + 0.5);
      if (kick) {
        b.vx = kick.x;
        b.vy = kick.y;
      } else {
        b.vx = p.vx * 1.15 + nx * DRIBBLE;
        b.vy = p.vy * 1.15 + ny * DRIBBLE;
      }
      return true;
    };

    const nearestOutfield = (team: Player[], x: number, y: number) => {
      let idx = 1;
      let best = Infinity;
      for (let i = 1; i < team.length; i++) {
        const d = dist(team[i].x, team[i].y, x, y);
        if (d < best) {
          best = d;
          idx = i;
        }
      }
      return idx;
    };

    const scoreGoal = (forMine: boolean) => {
      if (forMine) {
        myScoreRef.current += 1;
        setMyScore(myScoreRef.current);
      } else {
        cpuScoreRef.current += 1;
        setCpuScore(cpuScoreRef.current);
      }
      ball.current = { x: W / 2, y: H / 2, vx: 0, vy: 0 };
      const col = forMine ? myTeamRef.current.colors[0] : oppTeamRef.current.colors[0];
      celebrateRef.current = {
        frames: CELEBRATE_FRAMES,
        text: forMine ? 'GOAL!' : `${oppTeamRef.current.abbr} SCORES`,
        color: col
      };
    };

    const update = () => {
      const cel = celebrateRef.current;
      if (cel.frames > 0) {
        cel.frames -= 1;
        if (cel.frames === 0) kickoff();
        return;
      }

      // Match clock
      clockRef.current -= 1;
      if (clockRef.current % 60 === 0) setClock(Math.max(0, Math.ceil(clockRef.current / 60)));
      if (clockRef.current <= 0) {
        const m = myScoreRef.current;
        const c = cpuScoreRef.current;
        return endGame(m > c ? 'win' : m < c ? 'lose' : 'draw');
      }
      if (oppKickCd.current > 0) oppKickCd.current -= 1;
      if (passCd.current > 0) passCd.current -= 1;

      const b = ball.current;
      const me = mine.current;
      const cpu = opp.current;

      // ---- Who do you control? The outfield player nearest the ball. ----
      const ctrl = nearestOutfield(me, b.x, b.y);
      if (ctrl !== controlledRef.current) {
        controlledRef.current = ctrl;
        setActiveNum(me[ctrl].num);
      }

      // ---- Your team ----
      trackGk(me[0], GK_X_LEFT);
      for (let i = 1; i < me.length; i++) {
        if (i === ctrl) {
          // input-driven
          let dx: number;
          let dy: number;
          const ptr = pointerRef.current;
          if (ptr.active) {
            dx = ptr.x - me[i].x;
            dy = ptr.y - me[i].y;
            if (Math.hypot(dx, dy) < PLAYER_R) {
              dx = 0;
              dy = 0;
            }
          } else {
            const k = keysRef.current;
            const p = padRef.current;
            dx = (k.right || p.right ? 1 : 0) - (k.left || p.left ? 1 : 0);
            dy = (k.down || p.down ? 1 : 0) - (k.up || p.up ? 1 : 0);
          }
          const len = Math.hypot(dx, dy);
          if (len > 0.001) drive(me[i], me[i].x + (dx / len) * 20, me[i].y + (dy / len) * 20, PLAYER_SPEED);
          else {
            me[i].vx = 0;
            me[i].vy = 0;
          }
        } else {
          const h = homePos(me[i].slot, 'L');
          drive(me[i], h.x, h.y, FORM_SPEED);
        }
      }

      // ---- CPU team: nearest presses the ball, the rest hold shape ----
      trackGk(cpu[0], GK_X_RIGHT);
      const presser = nearestOutfield(cpu, b.x, b.y);
      for (let i = 1; i < cpu.length; i++) {
        if (i === presser) {
          // aim to get behind the ball so a touch sends it toward YOUR goal (left)
          const gx = b.x - 0;
          const gy = b.y - H / 2;
          const gl = Math.hypot(gx, gy) || 1;
          const tx = b.x + (gx / gl) * (PLAYER_R + BALL_R + 5);
          const ty = b.y + (gy / gl) * (PLAYER_R + BALL_R + 5);
          drive(cpu[i], tx, ty, PRESS_SPEED);
        } else {
          const h = homePos(cpu[i].slot, 'R');
          drive(cpu[i], h.x, h.y, FORM_SPEED);
        }
      }

      // ---- Ball physics ----
      b.x += b.vx;
      b.y += b.vy;
      b.vx *= BALL_FRICTION;
      b.vy *= BALL_FRICTION;
      const sp = Math.hypot(b.vx, b.vy);
      if (sp > BALL_MAX) {
        b.vx = (b.vx / sp) * BALL_MAX;
        b.vy = (b.vy / sp) * BALL_MAX;
      }
      if (sp < 0.02) {
        b.vx = 0;
        b.vy = 0;
      }
      if (b.y - BALL_R < 0) {
        b.y = BALL_R;
        b.vy = Math.abs(b.vy);
      } else if (b.y + BALL_R > H) {
        b.y = H - BALL_R;
        b.vy = -Math.abs(b.vy);
      }
      const inMouth = b.y > GOAL_TOP && b.y < GOAL_BOTTOM;
      if (b.x - BALL_R < 0) {
        if (inMouth) return scoreGoal(false);
        b.x = BALL_R;
        b.vx = Math.abs(b.vx);
      } else if (b.x + BALL_R > W) {
        if (inMouth) return scoreGoal(true);
        b.x = W - BALL_R;
        b.vx = -Math.abs(b.vx);
      }

      // ---- Contacts: your controlled player first (shoot / pass / dribble) ----
      const cp = me[ctrl];
      if (shootRef.current) {
        shootRef.current = false;
        const aimY = clamp(cp.y + cp.vy * 9, GOAL_TOP + 12, GOAL_BOTTOM - 12);
        const kx = W - cp.x;
        const ky = aimY - cp.y;
        const kl = Math.hypot(kx, ky) || 1;
        if (!contact(cp, PLAYER_R, { x: (kx / kl) * SHOOT_SPEED, y: (ky / kl) * SHOOT_SPEED }))
          contact(cp, PLAYER_R);
      } else if (passRef.current) {
        passRef.current = false;
        // pass to the most advanced teammate ahead of the ball
        let target: Player | null = null;
        let bestX = cp.x;
        for (let i = 1; i < me.length; i++) {
          if (i === ctrl) continue;
          if (me[i].x > bestX) {
            bestX = me[i].x;
            target = me[i];
          }
        }
        if (!target) {
          // nobody ahead — pass to the nearest teammate instead
          let bd = Infinity;
          for (let i = 1; i < me.length; i++) {
            if (i === ctrl) continue;
            const d = dist(me[i].x, me[i].y, cp.x, cp.y);
            if (d < bd) {
              bd = d;
              target = me[i];
            }
          }
        }
        if (target) {
          const kx = target.x - cp.x;
          const ky = target.y - cp.y;
          const kl = Math.hypot(kx, ky) || 1;
          if (!contact(cp, PLAYER_R, { x: (kx / kl) * PASS_SPEED, y: (ky / kl) * PASS_SPEED }))
            contact(cp, PLAYER_R);
        } else {
          contact(cp, PLAYER_R);
        }
      } else {
        contact(cp, PLAYER_R);
      }
      // other teammates can still touch a loose ball
      for (let i = 1; i < me.length; i++) if (i !== ctrl) contact(me[i], PLAYER_R);

      // ---- CPU contacts: presser may shoot / clear toward your goal ----
      for (let i = 1; i < cpu.length; i++) {
        if (contact(cpu[i], PLAYER_R)) {
          if (i === presser && oppKickCd.current === 0) {
            const closeToGoal = b.x < W * 0.42;
            // shoot at your goal, or just drive it forward
            const aimY = clamp(H / 2 + (b.y - H / 2) * 0.4, GOAL_TOP + 14, GOAL_BOTTOM - 14);
            const kx = 0 - cpu[i].x;
            const ky = aimY - cpu[i].y;
            const kl = Math.hypot(kx, ky) || 1;
            const power = closeToGoal ? SHOOT_SPEED : PASS_SPEED;
            b.vx = (kx / kl) * power;
            b.vy = (ky / kl) * power;
            oppKickCd.current = closeToGoal ? 70 : 28;
          }
        }
      }

      // ---- Keepers clear ----
      if (contact(me[0], GK_R)) {
        const kl = Math.hypot(b.vx, b.vy) || 1;
        b.vx = Math.abs(b.vx / kl) * CLEAR_SPEED + 2;
        b.vy = (b.vy / kl) * CLEAR_SPEED * 0.6;
      }
      if (contact(cpu[0], GK_R)) {
        const kl = Math.hypot(b.vx, b.vy) || 1;
        b.vx = -Math.abs(b.vx / kl) * CLEAR_SPEED - 2;
        b.vy = (b.vy / kl) * CLEAR_SPEED * 0.6;
      }
    };

    // ---------- Drawing ----------
    const drawPitch = () => {
      // stands
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(0, 0, W, H);
      for (const d of crowd) {
        ctx.fillStyle = d.c;
        ctx.fillRect(d.x, d.y, 2, 2);
      }
      // grass with mowing stripes
      const top = 26;
      const fh = H - top * 2;
      ctx.fillStyle = '#15803d';
      ctx.fillRect(0, top, W, fh);
      const bands = 12;
      for (let i = 0; i < bands; i++) {
        if (i % 2 === 0) {
          ctx.fillStyle = 'rgba(255,255,255,0.05)';
          ctx.fillRect((i * W) / bands, top, W / bands, fh);
        }
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(8, top + 4, W - 16, fh - 8);
      ctx.beginPath();
      ctx.moveTo(W / 2, top + 4);
      ctx.lineTo(W / 2, H - top - 4);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 54, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 3, 0, Math.PI * 2);
      ctx.fill();

      const boxH = 196;
      const boxW = 80;
      ctx.strokeRect(8, (H - boxH) / 2, boxW, boxH);
      ctx.strokeRect(W - 8 - boxW, (H - boxH) / 2, boxW, boxH);
      const sixH = 116;
      const sixW = 34;
      ctx.strokeRect(8, (H - sixH) / 2, sixW, sixH);
      ctx.strokeRect(W - 8 - sixW, (H - sixH) / 2, sixW, sixH);

      // goals
      ctx.fillStyle = 'rgba(255,255,255,0.16)';
      ctx.fillRect(0, GOAL_TOP, 8, GOAL_H);
      ctx.fillRect(W - 8, GOAL_TOP, 8, GOAL_H);
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(8, GOAL_TOP);
      ctx.lineTo(8, GOAL_BOTTOM);
      ctx.moveTo(W - 8, GOAL_TOP);
      ctx.lineTo(W - 8, GOAL_BOTTOM);
      ctx.stroke();
    };

    const drawPlayer = (p: Player, team: Team, controlled: boolean) => {
      const [c1, c2] = team.colors;
      // shadow
      ctx.fillStyle = 'rgba(0,0,0,0.28)';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y + PLAYER_R - 1, PLAYER_R * 0.95, PLAYER_R * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();
      if (controlled) {
        ctx.strokeStyle = 'rgba(250,204,21,0.95)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, PLAYER_R + 5, 0, Math.PI * 2);
        ctx.stroke();
        // chevron above the player you're steering
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - PLAYER_R - 8);
        ctx.lineTo(p.x - 5, p.y - PLAYER_R - 16);
        ctx.lineTo(p.x + 5, p.y - PLAYER_R - 16);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = c1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, PLAYER_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = c2;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = textOn(c1);
      ctx.font = '700 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(p.num), p.x, p.y + 0.5);
    };

    const drawGk = (p: Player, controlled: boolean) => {
      // keepers in a neutral hi-vis kit
      ctx.fillStyle = 'rgba(0,0,0,0.28)';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y + GK_R - 1, GK_R * 0.95, GK_R * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();
      void controlled;
      ctx.fillStyle = '#a3e635';
      ctx.beginPath();
      ctx.arc(p.x, p.y, GK_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#3f6212';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = '#1a2e05';
      ctx.font = '700 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GK', p.x, p.y + 0.5);
    };

    const drawBall = () => {
      const b = ball.current;
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.ellipse(b.x, b.y + BALL_R - 1, BALL_R * 0.95, BALL_R * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(255,255,255,0.6)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(b.x, b.y, BALL_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(b.x, b.y, 2.3, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      drawPitch();
      const mt = myTeamRef.current;
      const ot = oppTeamRef.current;
      const me = mine.current;
      const cpu = opp.current;
      if (me.length && cpu.length) {
        drawGk(me[0], false);
        drawGk(cpu[0], false);
        for (let i = 1; i < cpu.length; i++) drawPlayer(cpu[i], ot, false);
        for (let i = 1; i < me.length; i++) drawPlayer(me[i], mt, i === controlledRef.current);
        drawBall();
      }
      const cel = celebrateRef.current;
      if (cel.frames > 0) {
        ctx.fillStyle = 'rgba(15,23,42,0.4)';
        ctx.fillRect(0, H / 2 - 42, W, 84);
        ctx.fillStyle = '#fff';
        ctx.font = '800 42px Sora, Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cel.text, W / 2, H / 2);
      }
    };

    const loop = () => {
      if (statusRef.current === 'playing') update();
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const activeName =
    myTeamRef.current?.squad.find((p) => p.num === activeNum)?.name ?? '';

  // ===================== MENU (pick a profile) =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            FIFA <span className="accent">10</span>
          </h1>
          <div className="menu-bird">⚽</div>
          <p className="menu-copy">Pick a player or add a new one, then choose your teams.</p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                  <button type="button" className="player-chip-main" onClick={() => setSelectedName(n)}>
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span className="player-name">{n}</span>
                    <span className="chip-best">🏆 {wins[n] || 0}</span>
                  </button>
                  <button
                    type="button"
                    className="player-chip-remove"
                    aria-label={`Remove ${n}`}
                    onClick={() => removeName(n)}
                  >
                    ×
                  </button>
                </div>
              ))
            ) : (
              <p className="empty">No players yet — add one below.</p>
            )}
          </div>

          <div className="add-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addName()}
              type="text"
              maxLength={16}
              placeholder="Add a new name"
            />
            <button className="add-button" onClick={addName} disabled={!nameInput.trim()}>
              + Add
            </button>
          </div>

          <button className="button-primary button-full" onClick={goToTeams} disabled={!selectedName}>
            ▶ Choose teams
          </button>

          {selectedName && (
            <p className="best-line">
              Playing as <strong>{selectedName}</strong> · 🏆 Wins {wins[selectedName] || 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== TEAM SELECT =====================
  if (status === 'teams') {
    const TeamRow = ({
      heading,
      value,
      onPick,
      disabledId
    }: {
      heading: string;
      value: string;
      onPick: (id: string) => void;
      disabledId?: string;
    }) => (
      <div className="team-pick">
        <p className="pick-heading">{heading}</p>
        <div className="team-row">
          {TEAMS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`team-card ${value === t.id ? 'selected' : ''} ${
                disabledId === t.id ? 'disabled' : ''
              }`}
              disabled={disabledId === t.id}
              onClick={() => onPick(t.id)}
            >
              <span
                className="crest"
                style={{
                  background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})`,
                  color: textOn(t.colors[0])
                }}
              >
                {t.abbr}
              </span>
              <span className="team-name">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    );

    return (
      <div className="app-shell">
        <div className="teams-panel">
          <p className="eyebrow">Match setup</p>
          <h2 className="teams-title">Choose your teams</h2>

          <TeamRow heading="🔵 Your team" value={myTeamId} onPick={setMyTeamId} disabledId={oppTeamId} />
          <TeamRow heading="🔴 Opponent" value={oppTeamId} onPick={setOppTeamId} disabledId={myTeamId} />

          <div className="lineup-preview">
            <div className="lineup">
              <p className="lineup-head" style={{ color: myTeam.colors[0] }}>
                {myTeam.name}
              </p>
              <ul>
                {myTeam.squad.map((p) => (
                  <li key={p.num}>
                    <span className="sq-num">{p.num}</span> {p.name}
                    <span className="sq-role">{p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="vs">VS</div>
            <div className="lineup">
              <p className="lineup-head" style={{ color: oppTeam.colors[0] }}>
                {oppTeam.name}
              </p>
              <ul>
                {oppTeam.squad.map((p) => (
                  <li key={p.num}>
                    <span className="sq-num">{p.num}</span> {p.name}
                    <span className="sq-role">{p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="teams-actions">
            <button className="button-secondary" onClick={toMenu}>
              ‹ Back
            </button>
            <button className="button-primary" onClick={startMatch} disabled={myTeamId === oppTeamId}>
              ▶ Kick off
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== MATCH =====================
  return (
    <div className="app-shell">
      <div className="scoreboard">
        <div className="sb-team">
          <span
            className="sb-badge"
            style={{ background: `linear-gradient(135deg, ${myTeam.colors[0]}, ${myTeam.colors[1]})`, color: textOn(myTeam.colors[0]) }}
          >
            {myTeam.abbr}
          </span>
          <strong>{myScore}</strong>
        </div>
        <div className="sb-clock">{mmss(clock)}</div>
        <div className="sb-team right">
          <strong>{cpuScore}</strong>
          <span
            className="sb-badge"
            style={{ background: `linear-gradient(135deg, ${oppTeam.colors[0]}, ${oppTeam.colors[1]})`, color: textOn(oppTeam.colors[0]) }}
          >
            {oppTeam.abbr}
          </span>
        </div>
        <button className="stop-button sb-stop" onClick={toMenu}>
          ■
        </button>
      </div>

      <p className="active-line">
        ⚽ {username} · controlling <strong>#{activeNum} {activeName}</strong>
      </p>

      <div className="board-stage">
        <div className="board-frame">
          <canvas
            ref={canvasRef}
            className="game-canvas"
            style={{ aspectRatio: `${W} / ${H}` }}
            onPointerDown={pointerToField}
            onPointerMove={pointerToField}
            onPointerUp={endPointer}
            onPointerLeave={endPointer}
            onPointerCancel={endPointer}
          />

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">Full time</p>
                <h2>
                  {result === 'win' ? 'You win! 🏆' : result === 'lose' ? 'You lose' : 'Draw'}
                </h2>
                <div className="overlay-score">
                  <div>
                    <span>{myTeam.abbr}</span>
                    <strong>{myScore}</strong>
                  </div>
                  <div>
                    <span>{oppTeam.abbr}</span>
                    <strong>{cpuScore}</strong>
                  </div>
                </div>
                <div className="overlay-actions">
                  <button className="button-primary" onClick={startMatch}>
                    ↻ Rematch
                  </button>
                  <button className="button-secondary" onClick={() => setStatus('teams')}>
                    ⚙ Teams
                  </button>
                  <button className="button-secondary" onClick={toMenu}>
                    ‹ Menu
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* On-screen controls: d-pad to run, PASS + KICK buttons */}
      <div className="controls">
        <div className="dpad">
          <button
            className="dpad-btn up"
            aria-label="Up"
            onPointerDown={() => (padRef.current.up = true)}
            onPointerUp={() => (padRef.current.up = false)}
            onPointerLeave={() => (padRef.current.up = false)}
            onPointerCancel={() => (padRef.current.up = false)}
          >
            ▲
          </button>
          <button
            className="dpad-btn left"
            aria-label="Left"
            onPointerDown={() => (padRef.current.left = true)}
            onPointerUp={() => (padRef.current.left = false)}
            onPointerLeave={() => (padRef.current.left = false)}
            onPointerCancel={() => (padRef.current.left = false)}
          >
            ◀
          </button>
          <button
            className="dpad-btn right"
            aria-label="Right"
            onPointerDown={() => (padRef.current.right = true)}
            onPointerUp={() => (padRef.current.right = false)}
            onPointerLeave={() => (padRef.current.right = false)}
            onPointerCancel={() => (padRef.current.right = false)}
          >
            ▶
          </button>
          <button
            className="dpad-btn down"
            aria-label="Down"
            onPointerDown={() => (padRef.current.down = true)}
            onPointerUp={() => (padRef.current.down = false)}
            onPointerLeave={() => (padRef.current.down = false)}
            onPointerCancel={() => (padRef.current.down = false)}
          >
            ▼
          </button>
        </div>
        <div className="action-btns">
          <button className="pass-btn" aria-label="Pass" onPointerDown={() => (passRef.current = true)}>
            PASS
          </button>
          <button className="kick-btn" aria-label="Kick" onPointerDown={() => (shootRef.current = true)}>
            KICK
          </button>
        </div>
      </div>

      <p className="hint">
        Move: arrows / WASD / drag · PASS: Shift/F · SHOOT: Space · you steer the player by the ball
      </p>
    </div>
  );
}

export default App;
