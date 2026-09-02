import * as THREE from 'three';

// A "skin" is just a palette plus a couple of feature flags. Every runner is
// built from the same blocky body so they all animate identically; only colours
// and a few accessories (panda ears, ninja headband, astro helmet…) change.
export type Palette = {
  skin: string;
  hair: string; // black by default — Kamyar has black hair, brown eyes
  eyes: string;
  shirt: string;
  pants: string;
  isPanda?: boolean;
  helmet?: boolean;
  headband?: string;
  longHair?: boolean;
};

export type Skin = {
  id: string;
  name: string;
  /** Coins needed to unlock. 0 = free from the start. */
  cost: number;
  palette: Palette;
};

// Kamyar: black hair, brown eyes (the base look the player asked for), then lots
// of variations, a panda character, and Martina as a bonus co-star. Everything
// past the base Kamyar must be earned with coins collected while running.
export const SKINS: Skin[] = [
  {
    id: 'kamyar',
    name: 'Kamyar',
    cost: 0,
    palette: { skin: '#f1c27d', hair: '#141414', eyes: '#5b3a1e', shirt: '#2563eb', pants: '#1f2937' }
  },
  {
    id: 'kamyar-rojo',
    name: 'Kamyar Rojo',
    cost: 40,
    palette: { skin: '#f1c27d', hair: '#141414', eyes: '#5b3a1e', shirt: '#dc2626', pants: '#1f2937' }
  },
  {
    id: 'kamyar-verde',
    name: 'Kamyar Verde',
    cost: 70,
    palette: { skin: '#f1c27d', hair: '#141414', eyes: '#5b3a1e', shirt: '#16a34a', pants: '#14532d' }
  },
  {
    id: 'martina',
    name: 'Martina',
    cost: 100,
    palette: { skin: '#f5cba3', hair: '#2a1a0e', eyes: '#5b3a1e', shirt: '#db2777', pants: '#7e22ce', longHair: true }
  },
  {
    id: 'kamyar-dorado',
    name: 'Kamyar Dorado',
    cost: 130,
    palette: { skin: '#f1c27d', hair: '#141414', eyes: '#5b3a1e', shirt: '#f59e0b', pants: '#b45309' }
  },
  {
    id: 'panda',
    name: 'Panda',
    cost: 160,
    palette: { skin: '#ffffff', hair: '#111111', eyes: '#111111', shirt: '#f8fafc', pants: '#111111', isPanda: true }
  },
  {
    id: 'kamyar-ninja',
    name: 'Kamyar Ninja',
    cost: 200,
    palette: {
      skin: '#f1c27d',
      hair: '#141414',
      eyes: '#5b3a1e',
      shirt: '#111827',
      pants: '#111827',
      headband: '#dc2626'
    }
  },
  {
    id: 'kamyar-astro',
    name: 'Kamyar Astro',
    cost: 260,
    palette: { skin: '#f1c27d', hair: '#141414', eyes: '#5b3a1e', shirt: '#e5e7eb', pants: '#cbd5e1', helmet: true }
  }
];

export const DEFAULT_SKIN = SKINS[0];

function mat(color: string, extra?: Partial<THREE.MeshStandardMaterialParameters>) {
  return new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.75, metalness: 0.05, ...extra });
}

/**
 * A blocky humanoid runner. Faces -Z (its back is to the third-person camera).
 * Exposes limb pivots so the engine can animate a run / jump / slide cycle.
 */
export class Runner {
  readonly group = new THREE.Group();
  private lLeg = new THREE.Group();
  private rLeg = new THREE.Group();
  private lArm = new THREE.Group();
  private rArm = new THREE.Group();
  private body = new THREE.Group(); // everything above the hips, for slide-tilt
  private phase = 0;
  private readonly mats: THREE.Material[] = [];

  constructor(p: Palette) {
    const track = (m: THREE.Material) => {
      this.mats.push(m);
      return m;
    };
    const skinM = track(mat(p.skin));
    const hairM = track(mat(p.hair));
    const shirtM = track(mat(p.shirt));
    const pantsM = track(mat(p.pants));
    const eyesM = track(mat(p.eyes, { roughness: 0.35 }));

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.36), shirtM);
    torso.position.y = 1.28;
    torso.castShadow = true;
    this.body.add(torso);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), skinM);
    head.position.y = 1.86;
    head.castShadow = true;
    this.body.add(head);

    if (p.isPanda) {
      // Ears + eye patches
      for (const sx of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 12), hairM);
        ear.position.set(sx * 0.2, 2.08, 0.02);
        this.body.add(ear);
        const patch = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 12), hairM);
        patch.scale.set(1, 1.3, 0.4);
        patch.position.set(sx * 0.13, 1.88, -0.24);
        this.body.add(patch);
      }
    } else {
      // Hair: dark upper hemisphere cap over the head (fringe + back of head).
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.315, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.6), hairM);
      hair.position.y = 1.86;
      this.body.add(hair);
      if (p.longHair) {
        const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, 0.16), hairM);
        back.position.set(0, 1.62, 0.2);
        this.body.add(back);
      }
      if (p.headband) {
        const bandM = track(mat(p.headband));
        const band = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.045, 8, 20), bandM);
        band.rotation.x = Math.PI / 2;
        band.position.y = 1.92;
        this.body.add(band);
      }
    }

    // Brown eyes on the face (front = -Z).
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), eyesM);
      eye.position.set(sx * 0.11, 1.88, -0.26);
      this.body.add(eye);
    }

    if (p.helmet) {
      const glassM = track(
        new THREE.MeshStandardMaterial({
          color: new THREE.Color('#bfeaff'),
          transparent: true,
          opacity: 0.32,
          roughness: 0.1,
          metalness: 0.1
        })
      );
      const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.4, 20, 16), glassM);
      helmet.position.y = 1.88;
      this.body.add(helmet);
    }

    // Arms (pivot at shoulder ~y1.5)
    const armGeo = new THREE.BoxGeometry(0.16, 0.6, 0.16);
    for (const [side, pivot] of [
      [-1, this.lArm],
      [1, this.rArm]
    ] as const) {
      const arm = new THREE.Mesh(armGeo, skinM);
      arm.position.y = -0.3;
      arm.castShadow = true;
      pivot.add(arm);
      pivot.position.set(side * 0.4, 1.52, 0);
      this.body.add(pivot);
    }

    this.group.add(this.body);

    // Legs (pivot at hip ~y0.9)
    const legGeo = new THREE.BoxGeometry(0.2, 0.68, 0.22);
    for (const [side, pivot] of [
      [-1, this.lLeg],
      [1, this.rLeg]
    ] as const) {
      const leg = new THREE.Mesh(legGeo, pantsM);
      leg.position.y = -0.34;
      leg.castShadow = true;
      pivot.add(leg);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.34), track(mat('#0f172a')));
      shoe.position.set(0, -0.66, -0.05);
      pivot.add(shoe);
      pivot.position.set(side * 0.16, 0.92, 0);
      this.group.add(pivot);
    }
  }

  /** Animate one frame. mode drives the pose; runSpeed sets the stride tempo. */
  animate(dt: number, mode: 'run' | 'air' | 'slide', runSpeed: number) {
    this.phase += dt * runSpeed;
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

    if (mode === 'air') {
      this.lLeg.rotation.x = -0.5;
      this.rLeg.rotation.x = 0.6;
      this.lArm.rotation.x = -1.4;
      this.rArm.rotation.x = -1.1;
      return;
    }

    // Running: legs and arms swing in opposition.
    this.lLeg.rotation.x = swing * 0.9;
    this.rLeg.rotation.x = -swing * 0.9;
    this.lArm.rotation.x = -swing * 0.8;
    this.rArm.rotation.x = swing * 0.8;
  }

  dispose() {
    this.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
    });
    for (const m of this.mats) m.dispose();
  }
}
