import * as THREE from 'three';

// Every character is built from plain boxes and spheres — no model files, so the
// whole game ships in the bundle and runs offline. Same blocky skeleton for all
// of them (torso + head + two arm pivots + two leg pivots) so one animate() call
// poses anybody; only the colours and the head shape change.

export type Look = {
  fur: string; // head / muzzle / ears
  shirt: string; // torso
  pants: string;
  /** Dog Man wears the police body. Petey and friends are cats. */
  kind: 'dog' | 'cat';
  /** Book 12: the tomato-juice bath left him red forever. */
  scarlet?: boolean;
};

export const LOOKS: Record<string, Look> = {
  polican: { fur: '#c98f4e', shirt: '#2f4d8f', pants: '#22345f', kind: 'dog' },
  escarlata: { fur: '#dc2626', shirt: '#2f4d8f', pants: '#22345f', kind: 'dog', scarlet: true },
  pedrito: { fur: '#f97316', shirt: '#7c2d12', pants: '#5b2110', kind: 'cat' },
  gatito: { fur: '#fb923c', shirt: '#0ea5e9', pants: '#0369a1', kind: 'cat' }
};

export class Character {
  group = new THREE.Group();
  private body = new THREE.Group();
  private lArm = new THREE.Group();
  private rArm = new THREE.Group();
  private lLeg = new THREE.Group();
  private rLeg = new THREE.Group();
  private phase = 0;
  private mats: THREE.Material[] = [];

  constructor(look: Look) {
    const track = <T extends THREE.Material>(m: T) => {
      this.mats.push(m);
      return m;
    };
    const mat = (c: string) => new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: 0.75 });

    const furM = track(mat(look.fur));
    const shirtM = track(mat(look.shirt));
    const pantsM = track(mat(look.pants));
    const darkM = track(mat('#141414'));
    const whiteM = track(mat('#f8fafc'));

    // Torso — the police uniform for Dog Man, plain fur-coloured shirt for cats.
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.36), shirtM);
    torso.position.y = 1.28;
    torso.castShadow = true;
    this.body.add(torso);

    // The badge: a tiny gold square on the chest. Front of the model is -Z.
    if (look.kind === 'dog') {
      const badge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.04), track(mat('#fbbf24')));
      badge.position.set(-0.17, 1.42, -0.19);
      this.body.add(badge);
    }

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), furM);
    head.position.y = 1.86;
    head.castShadow = true;
    this.body.add(head);

    // Muzzle / snout, pointing forward (-Z).
    const snoutLen = look.kind === 'dog' ? 0.34 : 0.16;
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, snoutLen), furM);
    snout.position.set(0, 1.8, -0.28 - snoutLen / 2 + 0.1);
    this.body.add(snout);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), darkM);
    nose.position.set(0, 1.83, -0.28 - snoutLen + 0.12);
    this.body.add(nose);

    if (look.kind === 'dog') {
      // Long floppy dog ears hanging down the sides of the head.
      for (const sx of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.34, 0.14), furM);
        ear.position.set(sx * 0.29, 1.72, 0.02);
        ear.rotation.z = sx * 0.18;
        ear.castShadow = true;
        this.body.add(ear);
      }
      // Police cap.
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.14, 18), shirtM);
      cap.position.y = 2.09;
      this.body.add(cap);
      const brim = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.2), darkM);
      brim.position.set(0, 2.02, -0.22);
      this.body.add(brim);
    } else {
      // Pointy cat ears.
      for (const sx of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.22, 4), furM);
        ear.position.set(sx * 0.17, 2.1, 0.02);
        ear.castShadow = true;
        this.body.add(ear);
      }
    }

    // Eyes on the face (-Z), with white sclera so they read at a distance.
    for (const sx of [-1, 1]) {
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), whiteM);
      white.position.set(sx * 0.12, 1.93, -0.24);
      this.body.add(white);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 6), darkM);
      pupil.position.set(sx * 0.12, 1.93, -0.29);
      this.body.add(pupil);
    }

    // Tail — cats hold it up, the dog's sticks out behind.
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.42), furM);
    tail.position.set(0, look.kind === 'cat' ? 1.35 : 1.05, 0.32);
    tail.rotation.x = look.kind === 'cat' ? -0.9 : -0.25;
    this.body.add(tail);

    // Arms (pivot at the shoulder)
    const armGeo = new THREE.BoxGeometry(0.15, 0.56, 0.15);
    for (const [side, pivot] of [
      [-1, this.lArm],
      [1, this.rArm]
    ] as const) {
      const arm = new THREE.Mesh(armGeo, furM);
      arm.position.y = -0.28;
      arm.castShadow = true;
      pivot.add(arm);
      pivot.position.set(side * 0.38, 1.52, 0);
      this.body.add(pivot);
    }

    this.group.add(this.body);

    // Legs (pivot at the hip)
    const legGeo = new THREE.BoxGeometry(0.19, 0.64, 0.2);
    for (const [side, pivot] of [
      [-1, this.lLeg],
      [1, this.rLeg]
    ] as const) {
      const leg = new THREE.Mesh(legGeo, pantsM);
      leg.position.y = -0.32;
      leg.castShadow = true;
      pivot.add(leg);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.12, 0.3), darkM);
      foot.position.set(0, -0.62, -0.05);
      pivot.add(foot);
      pivot.position.set(side * 0.15, 0.9, 0);
      this.group.add(pivot);
    }
  }

  /** Pose one frame. `mode` picks the pose, `tempo` sets the stride speed. */
  animate(dt: number, mode: 'run' | 'air' | 'slide' | 'scared', tempo: number) {
    this.phase += dt * tempo;
    const swing = Math.sin(this.phase);

    if (mode === 'slide') {
      this.body.rotation.x = 0.9;
      this.body.position.y = -0.5;
      this.lLeg.rotation.x = 0.7;
      this.rLeg.rotation.x = 0.7;
      this.lArm.rotation.x = -0.6;
      this.rArm.rotation.x = -0.6;
      return;
    }

    this.body.rotation.x = 0;
    this.body.position.y = 0;

    if (mode === 'scared') {
      // Book 7: Dog Man is terrified of balls. Arms up, legs frozen mid-cower.
      this.lArm.rotation.x = -2.4;
      this.rArm.rotation.x = -2.4;
      this.lLeg.rotation.x = 0.2;
      this.rLeg.rotation.x = -0.2;
      this.body.position.y = Math.abs(Math.sin(this.phase * 3)) * 0.06;
      return;
    }

    if (mode === 'air') {
      this.lLeg.rotation.x = -0.5;
      this.rLeg.rotation.x = 0.6;
      this.lArm.rotation.x = -1.4;
      this.rArm.rotation.x = -1.1;
      return;
    }

    this.lLeg.rotation.x = swing * 0.95;
    this.rLeg.rotation.x = -swing * 0.95;
    this.lArm.rotation.x = -swing * 0.85;
    this.rArm.rotation.x = swing * 0.85;
  }

  /** Hide the body in first person so the camera isn't stuck inside the head. */
  setVisible(v: boolean) {
    this.group.visible = v;
  }

  dispose() {
    this.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
    });
    for (const m of this.mats) m.dispose();
  }
}
