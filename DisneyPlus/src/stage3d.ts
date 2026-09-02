import * as THREE from 'three';
import type { Character } from './types';

// The 3D stage behind the player. It is deliberately GENERIC: it knows nothing
// about any particular film, only about a cast (name + emoji + colour). So the
// same stage acts out Policán, El Irlandés or Iron Man — each actor is a blocky
// figure tinted with their colour, wearing their emoji as a face.
//
// No model files and no textures are downloaded: the faces are drawn into a
// 2D canvas at runtime, so the whole thing ships inside the bundle.

export type View = 'third' | 'first';

/** Draw an emoji into a canvas and hand it back as a texture. */
function emojiTexture(emoji: string): THREE.CanvasTexture {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const g = c.getContext('2d')!;
  g.clearRect(0, 0, size, size);
  g.font = `${Math.floor(size * 0.72)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(emoji, size / 2, size * 0.56);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

class Actor {
  group = new THREE.Group();
  private body = new THREE.Group();
  private lArm = new THREE.Group();
  private rArm = new THREE.Group();
  private phase = Math.random() * Math.PI * 2;
  private mats: THREE.Material[] = [];
  private geos: THREE.BufferGeometry[] = [];
  /** Where this actor stands when nobody is listening to them. */
  home = new THREE.Vector3();

  constructor(readonly character: Character) {
    const track = <T extends THREE.Material>(m: T) => {
      this.mats.push(m);
      return m;
    };
    const geo = <T extends THREE.BufferGeometry>(g: T) => {
      this.geos.push(g);
      return g;
    };
    const col = new THREE.Color(character.color);
    const dark = col.clone().multiplyScalar(0.55);

    const bodyM = track(new THREE.MeshStandardMaterial({ color: col, roughness: 0.7 }));
    const legM = track(new THREE.MeshStandardMaterial({ color: dark, roughness: 0.8 }));

    const torso = new THREE.Mesh(geo(new THREE.BoxGeometry(0.66, 0.8, 0.4)), bodyM);
    torso.position.y = 1.25;
    torso.castShadow = true;
    this.body.add(torso);

    // Head: a rounded block with the emoji on its front face (-Z).
    const head = new THREE.Mesh(geo(new THREE.BoxGeometry(0.6, 0.6, 0.42)), bodyM);
    head.position.y = 1.95;
    head.castShadow = true;
    this.body.add(head);

    const faceM = track(
      new THREE.MeshBasicMaterial({ map: emojiTexture(character.emoji), transparent: true })
    );
    // Actors face the audience (+Z), so the emoji sits on the front of the head.
    // A plane's normal is +Z by default, hence no rotation.
    const face = new THREE.Mesh(geo(new THREE.PlaneGeometry(0.52, 0.52)), faceM);
    face.position.set(0, 1.95, 0.22);
    this.body.add(face);

    const armGeo = geo(new THREE.BoxGeometry(0.14, 0.6, 0.14));
    for (const [side, pivot] of [
      [-1, this.lArm],
      [1, this.rArm]
    ] as const) {
      const arm = new THREE.Mesh(armGeo, bodyM);
      arm.position.y = -0.3;
      arm.castShadow = true;
      pivot.add(arm);
      pivot.position.set(side * 0.4, 1.5, 0);
      this.body.add(pivot);
    }

    const legGeo = geo(new THREE.BoxGeometry(0.2, 0.7, 0.22));
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(legGeo, legM);
      leg.position.set(side * 0.16, 0.5, 0);
      leg.castShadow = true;
      this.group.add(leg);
    }

    this.group.add(this.body);
  }

  /** `talking` actors step forward and gesture; the rest just breathe. */
  update(dt: number, talking: boolean, target: THREE.Vector3) {
    this.phase += dt * (talking ? 7 : 1.6);
    this.group.position.lerp(target, Math.min(1, dt * 3));

    const bob = Math.sin(this.phase) * (talking ? 0.07 : 0.02);
    this.body.position.y = bob;

    if (talking) {
      this.lArm.rotation.x = -0.5 + Math.sin(this.phase) * 0.5;
      this.rArm.rotation.x = -0.5 - Math.sin(this.phase) * 0.5;
      this.group.scale.lerp(new THREE.Vector3(1.12, 1.12, 1.12), Math.min(1, dt * 4));
    } else {
      this.lArm.rotation.x += (0 - this.lArm.rotation.x) * Math.min(1, dt * 3);
      this.rArm.rotation.x += (0 - this.rArm.rotation.x) * Math.min(1, dt * 3);
      this.group.scale.lerp(new THREE.Vector3(1, 1, 1), Math.min(1, dt * 4));
    }
  }

  dispose() {
    for (const g of this.geos) g.dispose();
    for (const m of this.mats) {
      const mm = m as THREE.MeshBasicMaterial;
      if (mm.map) mm.map.dispose();
      m.dispose();
    }
  }
}

export class Stage {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private cam: THREE.PerspectiveCamera;
  private raf = 0;
  private last = 0;
  private actors: Actor[] = [];
  private ground: THREE.Mesh;
  private groundMat: THREE.MeshStandardMaterial;
  private back: THREE.Mesh;
  private backMat: THREE.MeshBasicMaterial;
  private fog: THREE.Fog;
  private speakerId = '';
  private view: View = 'third';
  private colTop = new THREE.Color('#222');
  private colBottom = new THREE.Color('#111');
  private camPos = new THREE.Vector3(0, 3.1, 7.4);
  private camLook = new THREE.Vector3(0, 1.6, 0);

  constructor(private canvas: HTMLCanvasElement, cast: Character[]) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.cam = new THREE.PerspectiveCamera(52, 1, 0.1, 120);
    this.scene.add(this.cam);
    this.fog = new THREE.Fog('#111111', 14, 42);
    this.scene.fog = this.fog;

    this.scene.add(new THREE.HemisphereLight('#ffffff', '#334155', 1.15));
    const key = new THREE.DirectionalLight('#ffffff', 1.5);
    key.position.set(3, 9, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 30;
    for (const [k, v] of [
      ['left', -9],
      ['right', 9],
      ['top', 9],
      ['bottom', -9]
    ] as const) {
      (key.shadow.camera as any)[k] = v;
    }
    this.scene.add(key);

    this.groundMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#333'), roughness: 0.95 });
    this.ground = new THREE.Mesh(new THREE.CircleGeometry(26, 40), this.groundMat);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    // A big backdrop card behind the actors, tinted with the scene's gradient.
    this.backMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#111'), fog: false });
    this.back = new THREE.Mesh(new THREE.PlaneGeometry(70, 34), this.backMat);
    this.back.position.set(0, 8, -18);
    this.scene.add(this.back);

    this.setCast(cast);
    this.resize();
    this.raf = requestAnimationFrame(this.loop);
  }

  setCast(cast: Character[]) {
    for (const a of this.actors) {
      this.scene.remove(a.group);
      a.dispose();
    }
    this.actors = [];
    const list = cast.slice(0, 6);
    // Stand them in a shallow arc so everyone is visible from the front.
    list.forEach((c, i) => {
      const a = new Actor(c);
      const t = list.length === 1 ? 0 : i / (list.length - 1) - 0.5;
      a.home.set(t * Math.min(7, list.length * 1.5), 0, Math.abs(t) * 1.5 - 0.6);
      a.group.position.copy(a.home);
      this.scene.add(a.group);
      this.actors.push(a);
    });
  }

  setSpeaker(id: string) {
    this.speakerId = id;
  }

  setColors(from: string, to: string) {
    this.colTop.set(from);
    this.colBottom.set(to);
  }

  setView(v: View) {
    this.view = v;
  }

  resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.cam.aspect = w / h;
    this.cam.updateProjectionMatrix();
  }

  private loop = (now: number) => {
    this.raf = requestAnimationFrame(this.loop);
    if (!this.last) this.last = now;
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;

    // Ease the set dressing towards the current scene's colours.
    this.backMat.color.lerp(this.colTop, Math.min(1, dt * 2));
    this.groundMat.color.lerp(this.colBottom, Math.min(1, dt * 2));
    (this.scene.fog as THREE.Fog).color.lerp(this.colBottom, Math.min(1, dt * 2));
    this.renderer.setClearColor(this.colBottom, 1);

    const speaker = this.actors.find((a) => a.character.id === this.speakerId) ?? null;

    for (const a of this.actors) {
      const talking = a === speaker;
      // Whoever has the line walks downstage centre; everyone else holds their mark.
      const target = talking ? new THREE.Vector3(0, 0, 1.6) : a.home;
      a.update(dt, talking, target);
    }

    if (this.view === 'third') {
      // A wide, slowly breathing theatre shot of the whole cast.
      const drift = Math.sin(now / 4200) * 0.7;
      this.camPos.lerp(new THREE.Vector3(drift, 3.1, 7.6), Math.min(1, dt * 2));
      this.camLook.lerp(new THREE.Vector3(speaker ? 0 : 0, 1.7, 0), Math.min(1, dt * 2));
    } else {
      // First person: you are standing on the set, eye to eye with whoever speaks.
      this.camPos.lerp(new THREE.Vector3(0, 1.95, 4.1), Math.min(1, dt * 3));
      const t = speaker ? speaker.group.position : new THREE.Vector3(0, 0, 0);
      this.camLook.lerp(new THREE.Vector3(t.x, 1.95, t.z), Math.min(1, dt * 3));
    }
    this.cam.position.copy(this.camPos);
    this.cam.lookAt(this.camLook);

    this.renderer.render(this.scene, this.cam);
  };

  dispose() {
    cancelAnimationFrame(this.raf);
    for (const a of this.actors) a.dispose();
    this.ground.geometry.dispose();
    this.groundMat.dispose();
    this.back.geometry.dispose();
    this.backMat.dispose();
    this.renderer.dispose();
  }
}
