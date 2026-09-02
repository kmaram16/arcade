import {
  degreeFreq,
  midiToFreq,
  snapToScale,
  voiceById,
  type ScaleId,
  type Track,
  type Voice
} from './music';

// ---- Pitch detection (autocorrelation) for the mic autotune ----
function detectPitch(buf: Float32Array, sampleRate: number): number {
  let rms = 0;
  for (let i = 0; i < buf.length; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / buf.length);
  if (rms < 0.008) return -1; // too quiet / unvoiced

  const SIZE = buf.length;
  let r1 = 0;
  let r2 = SIZE - 1;
  const thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buf[i]) < thres) {
      r1 = i;
      break;
    }
  }
  for (let i = 1; i < SIZE / 2; i++) {
    if (Math.abs(buf[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }
  }
  const b = buf.slice(r1, r2);
  const n = b.length;
  const c = new Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let j = 0; j < n - i; j++) c[i] += b[j] * b[j + i];

  let d = 0;
  while (d < n - 1 && c[d] > c[d + 1]) d++;
  let maxval = -1;
  let maxpos = -1;
  for (let i = d; i < n; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;
  if (T0 <= 0) return -1;
  // parabolic interpolation
  const x1 = c[T0 - 1] ?? c[T0];
  const x2 = c[T0];
  const x3 = c[T0 + 1] ?? c[T0];
  const a = (x1 + x3 - 2 * x2) / 2;
  const bb = (x3 - x1) / 2;
  if (a) T0 = T0 - bb / (2 * a);
  const freq = sampleRate / T0;
  return freq > 60 && freq < 1200 ? freq : -1;
}

/** A polyphonic-ish "artist voice": stacked detuned oscillators → optional ring
 *  mod → vowel formant filters → amp. Used both for sung notes and live mic
 *  autotune (drive setFreq/setLevel continuously). */
class VoiceSynth {
  private oscs: OscillatorNode[] = [];
  private lfo: OscillatorNode;
  private amp: GainNode;
  private started = false;
  private ring?: OscillatorNode;
  private readonly voice: Voice;

  constructor(ctx: AudioContext, voice: Voice, dest: AudioNode) {
    this.voice = voice;
    const mix = ctx.createGain();
    mix.gain.value = 1 / Math.max(1, voice.stack);

    // Vibrato LFO → each osc.detune
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = voice.vibratoRate || 5;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = voice.vibrato;
    this.lfo.connect(lfoGain);

    for (let i = 0; i < voice.stack; i++) {
      const o = ctx.createOscillator();
      o.type = voice.wave;
      const spread = voice.stack > 1 ? voice.detune * (i / (voice.stack - 1) - 0.5) * 2 : 0;
      o.detune.value = spread;
      lfoGain.connect(o.detune);
      o.connect(mix);
      this.oscs.push(o);
    }

    let src: AudioNode = mix;
    if (voice.ring) {
      const ringNode = ctx.createGain();
      ringNode.gain.value = 0;
      this.ring = ctx.createOscillator();
      this.ring.frequency.value = voice.ring;
      const ringDepth = ctx.createGain();
      ringDepth.gain.value = 1;
      this.ring.connect(ringDepth).connect(ringNode.gain);
      mix.connect(ringNode);
      src = ringNode;
    }

    // Formant (vowel) filters in parallel, or dry if none.
    this.amp = ctx.createGain();
    this.amp.gain.value = 0;
    if (voice.formants.length) {
      const sum = ctx.createGain();
      for (const f of voice.formants) {
        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.value = f;
        bp.Q.value = 6;
        src.connect(bp).connect(sum);
      }
      // a touch of dry signal keeps it from sounding too thin
      const dry = ctx.createGain();
      dry.gain.value = 0.35;
      src.connect(dry).connect(sum);
      sum.connect(this.amp);
    } else {
      src.connect(this.amp);
    }
    this.amp.connect(dest);
  }

  start(t: number) {
    if (this.started) return;
    this.started = true;
    this.oscs.forEach((o) => o.start(t));
    this.lfo.start(t);
    this.ring?.start(t);
  }

  setFreq(freq: number, t: number, glide = 0.06) {
    const f = freq * Math.pow(2, this.voice.octave);
    for (const o of this.oscs) o.frequency.setTargetAtTime(f, t, glide);
  }

  setLevel(level: number, t: number, tau = 0.04) {
    this.amp.gain.setTargetAtTime(level, t, tau);
  }

  /** One sung note with a soft attack/release. */
  note(freq: number, t: number, dur: number, vol = 0.5) {
    this.setFreq(freq, t, 0.03);
    const g = this.amp.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(0.0001, t);
    g.exponentialRampToValueAtTime(vol, t + 0.03);
    g.setValueAtTime(vol, t + Math.max(0.05, dur - 0.06));
    g.exponentialRampToValueAtTime(0.0001, t + dur);
  }

  stop(t: number) {
    this.oscs.forEach((o) => o.stop(t));
    this.lfo.stop(t);
    this.ring?.stop(t);
  }
}

type Callbacks = { onStep?: (step: number) => void };

export class AudioEngine {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  analyser!: AnalyserNode;

  private timer = 0;
  private nextStepTime = 0;
  private step = 0;
  private startTime = 0;
  private stepDur = 0.125;
  playing = false;
  barIndex = 0; // completed loops — drives the karaoke line
  private track: Track | null = null;

  // live mic autotune
  private micStream: MediaStream | null = null;
  private micVoice: VoiceSynth | null = null;
  private micAnalyser: AnalyserNode | null = null;
  private micTimer = 0;

  private ensure(): AudioContext {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.master.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  async resume() {
    const ctx = this.ensure();
    if (ctx.state === 'suspended') await ctx.resume();
  }

  spectrum(): Uint8Array {
    if (!this.ctx) return new Uint8Array(0);
    const a = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(a);
    return a;
  }

  /** Fractional step position for playhead + karaoke line. */
  position(): number {
    if (!this.ctx || !this.playing) return 0;
    return (this.ctx.currentTime - this.startTime) / this.stepDur;
  }

  // ---- drum + bass voices ----
  private noise(t: number, dur: number, hp: number, vol: number) {
    const ctx = this.ctx!;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = hp;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur);
  }

  private kick(t: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.12);
    g.gain.setValueAtTime(0.9, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.18);
  }

  private snare(t: number) {
    this.noise(t, 0.18, 1400, 0.5);
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = 180;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.12);
  }

  private hihat(t: number) {
    this.noise(t, 0.05, 7000, 0.25);
  }

  private bass(t: number, freq: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.32, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(f).connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.24);
  }

  // ---- transient sung note (for the lead line and previews) ----
  private sing(t: number, freq: number, dur: number, voice: Voice, vol = 0.4) {
    const v = new VoiceSynth(this.ctx!, voice, this.master);
    v.start(t);
    v.note(freq, t, dur, vol);
    v.stop(t + dur + 0.05);
  }

  /** Play a single in-key note now (Auto-Melodía pad / voice preview). */
  async previewDegree(voiceId: string, root: number, scale: ScaleId, degree: number) {
    await this.resume();
    const t = this.ctx!.currentTime + 0.01;
    this.sing(t, degreeFreq(60, root, scale, degree), 0.5, voiceById(voiceId), 0.5);
  }

  private scheduleStep(stepIdx: number, t: number, track: Track) {
    const p = track.pattern;
    if (p.kick[stepIdx]) this.kick(t);
    if (p.snare[stepIdx]) this.snare(t);
    if (p.hihat[stepIdx]) this.hihat(t);
    const b = p.bass[stepIdx];
    if (b != null) this.bass(t, degreeFreq(36, track.root, track.scale, b));
    const l = p.lead[stepIdx];
    if (l != null) this.sing(t, degreeFreq(60, track.root, track.scale, l), this.stepDur * 1.5, voiceById(track.voice), 0.42);
  }

  async play(track: Track, cb: Callbacks = {}) {
    await this.resume();
    this.stopSequencer();
    this.track = track;
    this.stepDur = 60 / track.bpm / 4; // 16th notes
    this.playing = true;
    this.step = 0;
    this.barIndex = 0;
    const ctx = this.ctx!;
    this.nextStepTime = ctx.currentTime + 0.06;
    this.startTime = this.nextStepTime;
    const loop = () => {
      if (!this.playing) return;
      const cur = this.track!;
      this.stepDur = 60 / cur.bpm / 4;
      while (this.nextStepTime < ctx.currentTime + 0.12) {
        this.scheduleStep(this.step, this.nextStepTime, cur);
        cb.onStep?.(this.step);
        this.nextStepTime += this.stepDur;
        this.step = (this.step + 1) % 16;
        if (this.step === 0) {
          this.startTime = this.nextStepTime; // realign each loop
          this.barIndex++;
        }
      }
      this.timer = window.setTimeout(loop, 25);
    };
    loop();
  }

  /** Swap the playing track's data live (studio edits). */
  update(track: Track) {
    if (this.track && this.track.id === track.id) this.track = track;
  }

  private stopSequencer() {
    this.playing = false;
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = 0;
  }

  stop() {
    this.stopSequencer();
    this.track = null;
  }

  // ---- live mic autotune ----
  async startMic(voiceId: string, root: number, scale: ScaleId, onPitch: (note: string, on: boolean) => void) {
    await this.resume();
    const ctx = this.ctx!;
    this.micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false } });
    const src = ctx.createMediaStreamSource(this.micStream);
    this.micAnalyser = ctx.createAnalyser();
    this.micAnalyser.fftSize = 2048;
    src.connect(this.micAnalyser);

    this.micVoice = new VoiceSynth(ctx, voiceById(voiceId), this.master);
    this.micVoice.start(ctx.currentTime);

    const buf = new Float32Array(this.micAnalyser.fftSize);
    const names = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
    this.micTimer = window.setInterval(() => {
      if (!this.micAnalyser || !this.micVoice) return;
      this.micAnalyser.getFloatTimeDomainData(buf);
      let rms = 0;
      for (let i = 0; i < buf.length; i++) rms += buf[i] * buf[i];
      rms = Math.sqrt(rms / buf.length);
      const f = detectPitch(buf, ctx.sampleRate);
      const now = ctx.currentTime;
      if (f > 0) {
        const tuned = snapToScale(f, root, scale);
        this.micVoice.setFreq(tuned, now, 0.05);
        this.micVoice.setLevel(Math.min(0.6, rms * 3), now, 0.03);
        const midi = Math.round(69 + 12 * Math.log2(tuned / 440));
        onPitch(names[((midi % 12) + 12) % 12], true);
      } else {
        this.micVoice.setLevel(0, now, 0.06);
        onPitch('—', false);
      }
    }, 45);
  }

  stopMic() {
    if (this.micTimer) window.clearInterval(this.micTimer);
    this.micTimer = 0;
    if (this.micVoice) {
      try {
        this.micVoice.setLevel(0, this.ctx!.currentTime, 0.02);
        this.micVoice.stop(this.ctx!.currentTime + 0.1);
      } catch {
        /* ignore */
      }
      this.micVoice = null;
    }
    this.micStream?.getTracks().forEach((t) => t.stop());
    this.micStream = null;
    this.micAnalyser = null;
  }

  get micActive() {
    return !!this.micStream;
  }
}

export function noteName(freq: number): string {
  const names = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
  const midi = Math.round(69 + 12 * Math.log2(freq / 440));
  return names[((midi % 12) + 12) % 12];
}

export { midiToFreq };
