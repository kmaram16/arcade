/* Nebula Console — real 3D ambience layer (three.js 0.162, local/offline).
   Renders a lit, realistic room + real 3D pet models (cat + dog) with soft
   shadows in WebGL, BEHIND the floor-standing CSS TV (which keeps showing the
   live carousel/game — zero overlay-sync risk). Progressive enhancement: if
   WebGL is missing or init throws, it does nothing and the CSS version stays.
   Quality tiers scale effects for phones / PS5. */
import * as THREE from './vendor/three.module.js';

(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function hasWebGL() {
    try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); }
    catch (e) { return false; }
  }
  if (!hasWebGL()) return;

  var ua = navigator.userAgent || '';
  var isPS = /PlayStation/i.test(ua);
  var isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);
  var reduced = false; try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var TIER = (isMobile || isPS) ? 'low' : 'high';
  var animPets = !reduced;

  var scene, camera, renderer, clock, petDog, petCat, raycaster, pointer = new THREE.Vector2();
  var roomGroup, spaceGroup, keyLight, inited = false;
  var fogRoom = null, fogSpace = null, furTex = null;

  function cfg() {
    if (TIER === 'low') return { dpr: Math.min(1.5, window.devicePixelRatio || 1), shadows: !isPS, shadowSize: 1024, aa: false };
    return { dpr: Math.min(2, window.devicePixelRatio || 1), shadows: true, shadowSize: 2048, aa: true };
  }

  function init() {
    var c = cfg();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: c.aa, powerPreference: 'high-performance' });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(c.dpr);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    if (c.shadows) { renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; }
    var cv = renderer.domElement;
    cv.id = 'gl'; cv.style.cssText = 'position:fixed;inset:0;z-index:4;pointer-events:none;';
    document.body.appendChild(cv);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
    clock = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    if (TIER === 'high') furTex = makeFurTexture();   // fur bump for the pets

    loadEnv();   // PBR environment reflections/ambient (lazy, with the 3D layer)
    buildLights(c);
    buildRoom();
    buildSpace();
    buildShadowCatcher();
    petDog = makeShepherd(); petDog.position.set(-2.3, 0, 0.6); petDog.rotation.y = 0.5; scene.add(petDog);
    petCat = makeRabbit(); petCat.position.set(2.3, 0, 0.6); petCat.rotation.y = -0.4; scene.add(petCat);

    window.addEventListener('resize', onResize);
    document.body.addEventListener('pointerdown', onPointer, true);
    onResize();
    inited = true;
    document.body.classList.add('webgl-on');
    renderer.setAnimationLoop(frame);
  }

  // PBR environment map (procedural studio) for realistic reflections + ambient.
  function loadEnv() {
    import('./vendor/RoomEnvironment.js').then(function (m) {
      try {
        var pmrem = new THREE.PMREMGenerator(renderer);
        var env = pmrem.fromScene(new m.RoomEnvironment(), 0.04);
        scene.environment = env.texture; pmrem.dispose();
      } catch (e) {}
    }).catch(function () {});
  }

  // A cheap canvas-generated "fur" bump texture: many tiny strokes → furry micro-relief
  // that catches light, so the coat reads as fur instead of smooth plastic. One shared
  // texture, high tier only.
  function makeFurTexture() {
    try {
      var c = document.createElement('canvas'); c.width = c.height = 256; var x = c.getContext('2d');
      x.fillStyle = '#808080'; x.fillRect(0, 0, 256, 256);
      for (var i = 0; i < 11000; i++) {
        var gx = Math.random() * 256, gy = Math.random() * 256, sh = 90 + ((Math.random() * 130) | 0);
        x.strokeStyle = 'rgba(' + sh + ',' + sh + ',' + sh + ',' + (0.25 + Math.random() * 0.45) + ')';
        x.lineWidth = 0.6 + Math.random() * 0.5; x.beginPath(); x.moveTo(gx, gy);
        x.lineTo(gx + (Math.random() - 0.5) * 3.5, gy - (2 + Math.random() * 4)); x.stroke();
      }
      var t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 5); return t;
    } catch (e) { return null; }
  }

  // Fur-like material: physical with soft sheen (fur rim) + fur bump on high tier; standard on low.
  function furMat(color, opt) {
    opt = opt || {};
    if (TIER === 'high') {
      var m = new THREE.MeshPhysicalMaterial(Object.assign({
        color: color, roughness: 0.98, metalness: 0, sheen: 0.7,
        sheenColor: new THREE.Color(0xfff2e6), sheenRoughness: 0.9, envMapIntensity: 0.65
      }, opt));
      if (furTex) { m.bumpMap = furTex; m.bumpScale = 0.022; }
      return m;
    }
    return new THREE.MeshStandardMaterial(Object.assign({ color: color, roughness: 0.95, metalness: 0, envMapIntensity: 0.5 }, opt));
  }

  function buildLights(c) {
    scene.add(new THREE.HemisphereLight(0xbcd0ff, 0x202435, 0.38));
    scene.add(new THREE.AmbientLight(0x4a5a8c, 0.22));
    keyLight = new THREE.DirectionalLight(0xfff2e2, 2.1);
    keyLight.position.set(3.5, 6.5, 4.5);
    if (c.shadows) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(c.shadowSize, c.shadowSize);
      keyLight.shadow.camera.near = 1; keyLight.shadow.camera.far = 25;
      keyLight.shadow.camera.left = -7; keyLight.shadow.camera.right = 7;
      keyLight.shadow.camera.top = 7; keyLight.shadow.camera.bottom = -7;
      keyLight.shadow.bias = -0.0005; keyLight.shadow.radius = 4;
    }
    scene.add(keyLight);
    var fill = new THREE.DirectionalLight(0x6a8cff, 0.5); fill.position.set(-4, 3, 2); scene.add(fill);
    var rim = new THREE.DirectionalLight(0xbfe0ff, 0.9); rim.position.set(-2, 5, -6); scene.add(rim); // back rim → fur edge highlight
    var glow = new THREE.PointLight(0x7c5cff, 0.5, 14); glow.position.set(0, 2.2, 1.5); scene.add(glow);
  }

  // ---- cozy, realistic gaming room ----
  function buildRoom() {
    roomGroup = new THREE.Group();
    var low = TIER === 'low';
    fogRoom = new THREE.Fog(0x20203a, 13, 36);
    var mat = function (o) { return new THREE.MeshStandardMaterial(o); };
    // floor with a soft gloss (wooden/carpet)
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), mat({ color: 0x3a2f28, roughness: 0.42, metalness: 0.08 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; roomGroup.add(floor);
    // rug under the TV
    var rug = new THREE.Mesh(new THREE.CircleGeometry(3.4, 44), mat({ color: 0x3b2d66, roughness: 0.96 }));
    rug.rotation.x = -Math.PI / 2; rug.position.set(0, 0.01, 1.2); rug.receiveShadow = true; roomGroup.add(rug);
    var rugR = new THREE.Mesh(new THREE.RingGeometry(2.9, 3.3, 44), mat({ color: 0x6b54c0, roughness: 0.96 }));
    rugR.rotation.x = -Math.PI / 2; rugR.position.set(0, 0.012, 1.2); roomGroup.add(rugR);
    // walls (corner)
    var wallMat = mat({ color: 0x2b2a40, roughness: 0.95 });
    var back = new THREE.Mesh(new THREE.PlaneGeometry(60, 26), wallMat); back.position.set(0, 13, -7); back.receiveShadow = true; roomGroup.add(back);
    if (!low) {
      var lw = new THREE.Mesh(new THREE.PlaneGeometry(40, 26), wallMat); lw.position.set(-11, 13, 10); lw.rotation.y = Math.PI / 2; roomGroup.add(lw);
      var rw = lw.clone(); rw.position.x = 11; rw.rotation.y = -Math.PI / 2; roomGroup.add(rw);
    }
    // window with soft daylight + frame + light
    var win = new THREE.Mesh(new THREE.PlaneGeometry(4, 3), mat({ color: 0xcfe9ff, emissive: 0xbfe3ff, emissiveIntensity: 0.85, roughness: 0.4 }));
    win.position.set(-4.6, 5.6, -6.9); roomGroup.add(win);
    var fm = mat({ color: 0xeef0f4, roughness: 0.6 });
    [[0, 1.55, 4.4, 0.18], [0, -1.55, 4.4, 0.18]].forEach(function (b) { var m2 = new THREE.Mesh(new THREE.BoxGeometry(b[2], b[3], 0.16), fm); m2.position.set(-4.6 + b[0], 5.6 + b[1], -6.84); roomGroup.add(m2); });
    [[-2.2, 0, 0.18, 3.3], [2.2, 0, 0.18, 3.3], [0, 0, 0.12, 3.3]].forEach(function (b) { var m2 = new THREE.Mesh(new THREE.BoxGeometry(b[2], b[3], 0.16), fm); m2.position.set(-4.6 + b[0], 5.6, -6.84); roomGroup.add(m2); });
    var winLight = new THREE.PointLight(0xbfe3ff, 0.8, 22); winLight.position.set(-4.6, 5.6, -5); roomGroup.add(winLight);
    // framed posters
    if (!low) [[3.6, 6, 0x7c5cff], [5.3, 5, 0xff6b8a]].forEach(function (a) {
      var frp = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.1), mat({ color: 0x111018, roughness: 0.6 })); frp.position.set(a[0], a[1], -6.88); roomGroup.add(frp);
      var art = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.9), mat({ color: a[2], emissive: a[2], emissiveIntensity: 0.18, roughness: 0.7 })); art.position.set(a[0], a[1], -6.86); roomGroup.add(art);
    });
    // houseplant
    var pot = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.55, 16), mat({ color: 0xb5542f, roughness: 0.85 })); pot.position.set(4.8, 0.27, -5.4); pot.castShadow = true; roomGroup.add(pot);
    var leaf = mat({ color: 0x3f9a4e, roughness: 0.8 });
    for (var i = 0; i < (low ? 4 : 8); i++) { var lf = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.0, 6), leaf); lf.position.set(4.8 + Math.cos(i) * 0.2, 1.0 + (i % 3) * 0.18, -5.4 + Math.sin(i) * 0.2); lf.rotation.z = (i - 4) * 0.2; lf.rotation.x = Math.sin(i) * 0.3; lf.castShadow = true; roomGroup.add(lf); }
    // beanbag
    if (!low) { var bean = new THREE.Mesh(new THREE.SphereGeometry(0.95, 18, 14), mat({ color: 0x2f6b8c, roughness: 0.92 })); bean.scale.set(1, 0.62, 1); bean.position.set(-5, 0.52, 2.6); bean.castShadow = true; bean.receiveShadow = true; roomGroup.add(bean); }
    // warm floor lamp
    var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.5, 8), mat({ color: 0x222228, roughness: 0.5, metalness: 0.4 })); pole.position.set(5.4, 1.25, -3); pole.castShadow = true; roomGroup.add(pole);
    var shade = new THREE.Mesh(new THREE.ConeGeometry(0.52, 0.62, 18, 1, true), mat({ color: 0xffd9a0, emissive: 0xffb060, emissiveIntensity: 0.95, roughness: 0.6, side: THREE.DoubleSide })); shade.position.set(5.4, 2.6, -3); roomGroup.add(shade);
    var lamp = new THREE.PointLight(0xffb060, 0.75, 13); lamp.position.set(5.4, 2.5, -3); roomGroup.add(lamp);
    scene.add(roomGroup);
  }

  // ---- space background (selectable alternative) ----
  function buildSpace() {
    spaceGroup = new THREE.Group();
    fogSpace = new THREE.Fog(0x05060d, 16, 55);
    var n = TIER === 'low' ? 500 : 1600;
    var geo = new THREE.BufferGeometry(), pos = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 90; pos[i * 3 + 1] = Math.random() * 45; pos[i * 3 + 2] = (Math.random() - 0.5) * 90 - 12; }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    var stars = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.13, sizeAttenuation: true }));
    spaceGroup.add(stars); spaceGroup.userData.stars = stars;
    [[-9, 11, -24, 0x6b3bcf], [10, 8, -26, 0x2b6cff]].forEach(function (a) {
      var s = new THREE.Mesh(new THREE.CircleGeometry(9, 28), new THREE.MeshBasicMaterial({ color: a[3], transparent: true, opacity: 0.13 }));
      s.position.set(a[0], a[1], a[2]); spaceGroup.add(s);
    });
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x0a0c1a, roughness: 0.22, metalness: 0.5 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; spaceGroup.add(floor);
    scene.add(spaceGroup); spaceGroup.visible = false;
  }

  // ---- procedural rabbit (realistic, natural agouti coat; brown/grey/white) ----
  function makeRabbit() {
    var g = new THREE.Group();
    var VAR = [
      { back: 0x7d6447, mid: 0xa6865d, belly: 0xe6d8c0, tip: 0x53402e, nose: 0x33232a }, // brown agouti
      { back: 0x86837b, mid: 0xa8a49b, belly: 0xe8e4dc, tip: 0x5a5751, nose: 0x322b30 }, // grey
      { back: 0xe2d9cc, mid: 0xefe9df, belly: 0xf8f5ef, tip: 0xc8bdac, nose: 0xd98aa0 }  // white
    ];
    var v = VAR[(Math.random() * VAR.length) | 0];
    var mid = furMat(v.mid), back = furMat(v.back), belly = furMat(v.belly), tipM = furMat(v.tip);
    var pink = furMat(0xe8aeb6, { sheen: 0.3, roughness: 0.9 });
    var dark = (TIER === 'high')
      ? new THREE.MeshPhysicalMaterial({ color: 0x0c0a0f, roughness: 0.07, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.15 })
      : new THREE.MeshStandardMaterial({ color: 0x0c0a0f, roughness: 0.18, metalness: 0.1, envMapIntensity: 0.9 });
    var noseMat = (TIER === 'high')
      ? new THREE.MeshPhysicalMaterial({ color: v.nose, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.25, envMapIntensity: 0.8 }) // damp nose
      : new THREE.MeshStandardMaterial({ color: v.nose, roughness: 0.4, metalness: 0.05, envMapIntensity: 0.6 });

    // sitting silhouette: rounded haunches rising to an upright chest
    var haunch = new THREE.Mesh(new THREE.SphereGeometry(0.44, 24, 18), mid); haunch.scale.set(1, 1.02, 1.0); haunch.position.set(0, 0.44, -0.04);
    var chest = new THREE.Mesh(new THREE.SphereGeometry(0.3, 22, 16), mid); chest.scale.set(0.95, 1.05, 0.95); chest.position.set(0, 0.6, 0.2);
    // darker dorsal (back) grading
    var dorsal = new THREE.Mesh(new THREE.SphereGeometry(0.43, 22, 16), back); dorsal.scale.set(1.0, 0.56, 1.02); dorsal.position.set(0, 0.64, -0.06);
    // lighter belly/chest patch
    var bellyPatch = new THREE.Mesh(new THREE.SphereGeometry(0.23, 18, 14), belly); bellyPatch.scale.set(0.9, 1.0, 0.72); bellyPatch.position.set(0, 0.42, 0.33);

    var head = new THREE.Group(); head.position.set(0, 0.86, 0.26);
    var skull = new THREE.Mesh(new THREE.SphereGeometry(0.24, 22, 16), mid); skull.scale.set(1.02, 0.98, 1.0); head.add(skull);
    var muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 14), mid); muzzle.scale.set(0.9, 0.82, 1.1); muzzle.position.set(0, -0.06, 0.18); head.add(muzzle);
    var chin = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 12), belly); chin.scale.set(1.0, 0.6, 1.0); chin.position.set(0, -0.14, 0.14); head.add(chin);
    var nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), noseMat); nose.position.set(0, -0.04, 0.3); head.add(nose);
    var eL = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), dark); eL.scale.set(1, 1.1, 1); eL.position.set(-0.13, 0.03, 0.16);
    var eR = eL.clone(); eR.position.x = 0.13; head.add(eL, eR);
    [eL, eR].forEach(function (e) { var gl = new THREE.Mesh(new THREE.SphereGeometry(0.014, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x9a9a9a })); gl.position.set(e.position.x + 0.025, e.position.y + 0.02, 0.2); head.add(gl); });
    var wMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c8, roughness: 0.4 });
    [-1, 1].forEach(function (s) { for (var i = 0; i < 3; i++) { var w = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.32, 4), wMat); w.position.set(s * 0.09, -0.05 + i * 0.03, 0.26); w.rotation.z = Math.PI / 2; w.rotation.y = s * (0.3 + i * 0.12); head.add(w); } });
    // ears: outer coat + darker tip + pink inner
    function ear() {
      var grp = new THREE.Group();
      var o = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.5, 8, 12), mid); o.scale.set(0.7, 1, 1);
      var tipc = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), tipM); tipc.scale.set(0.7, 0.5, 1); tipc.position.y = 0.3;
      var inr = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.4, 6, 10), pink); inr.scale.set(0.7, 1, 1); inr.position.z = 0.03;
      grp.add(o, tipc, inr); return grp;
    }
    var earL = ear(); earL.position.set(-0.12, 0.3, 0.0); earL.rotation.z = 0.16; earL.rotation.x = -0.1;
    var earR = ear(); earR.position.set(0.12, 0.3, 0.0); earR.rotation.z = -0.16; earR.rotation.x = -0.1;
    head.add(earL, earR);

    var pL = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), mid); pL.scale.set(1, 0.7, 1.6); pL.position.set(-0.12, 0.1, 0.34); var pR = pL.clone(); pR.position.x = 0.12;
    var fL = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.22, 6, 10), mid); fL.rotation.x = Math.PI / 2; fL.position.set(-0.2, 0.1, 0.12); var fR = fL.clone(); fR.position.x = 0.2;
    var tail = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 12), belly); tail.position.set(0, 0.44, -0.44);

    g.add(haunch, chest, dorsal, bellyPatch, head, pL, pR, fL, fR, tail);
    g.traverse(function (o) { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.userData = { kind: 'rabbit', body: haunch, head: head, tail: tail, eL: eL, eR: eR, earL: earL, earR: earR, nose: nose, t: Math.random() * 6, hop: 0 };
    g.scale.setScalar(0.8);
    return g;
  }

  // ---- procedural German Shepherd dog (black-&-tan, upright ears, long snout) ----
  function makeShepherd() {
    var g = new THREE.Group();
    var tan = furMat(0xc99a58), tanLt = furMat(0xd9b071), blk = furMat(0x2a231b, { sheenColor: new THREE.Color(0x4a443a) });
    var noseMat = (TIER === 'high') ? new THREE.MeshPhysicalMaterial({ color: 0x111016, roughness: 0.25, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 0.8 }) : new THREE.MeshStandardMaterial({ color: 0x111016, roughness: 0.4 });
    var eyeMat = (TIER === 'high') ? new THREE.MeshPhysicalMaterial({ color: 0x1a0f08, roughness: 0.07, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 }) : new THREE.MeshStandardMaterial({ color: 0x1a0f08, roughness: 0.2, metalness: 0.1 });
    var tongueMat = new THREE.MeshStandardMaterial({ color: 0xe07d8c, roughness: 0.5 });
    // torso with a black saddle + hindquarters (shepherd slope)
    var body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 22, 16), tan); body.scale.set(0.95, 0.9, 1.7); body.position.set(0, 0.62, -0.05);
    var chest = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), tan); chest.scale.set(0.95, 1.0, 0.9); chest.position.set(0, 0.55, 0.42);
    var saddle = new THREE.Mesh(new THREE.SphereGeometry(0.41, 22, 16), blk); saddle.scale.set(0.99, 0.66, 1.5); saddle.position.set(0, 0.74, -0.12);
    var rump = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 14), tan); rump.scale.set(1, 0.92, 0.95); rump.position.set(0, 0.54, -0.62);
    var neck = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.42, 14), tan); neck.position.set(0, 0.8, 0.5); neck.rotation.x = 0.55;
    // head group (looks around)
    var head = new THREE.Group(); head.position.set(0, 1.02, 0.64);
    var skull = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 14), tan); skull.scale.set(1, 0.95, 1.05); head.add(skull);
    var cheeks = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), tan); cheeks.scale.set(1.12, 0.78, 0.9); cheeks.position.set(0, -0.04, 0.05); head.add(cheeks);
    var snout = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.26, 6, 10), blk); snout.rotation.x = Math.PI / 2; snout.position.set(0, -0.07, 0.3); head.add(snout);
    var nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), noseMat); nose.position.set(0, -0.05, 0.47); head.add(nose);
    var tongue = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.12), tongueMat); tongue.position.set(0, -0.14, 0.4); head.add(tongue);
    var eL = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), eyeMat); eL.position.set(-0.11, 0.04, 0.17); var eR = eL.clone(); eR.position.x = 0.11; head.add(eL, eR);
    [eL, eR].forEach(function (e) { var gl = new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x9a9a9a })); gl.position.set(e.position.x + 0.02, e.position.y + 0.02, 0.21); head.add(gl); });
    function ear() { var e = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.32, 4), blk); e.scale.set(1, 1, 0.5); return e; }
    var earL = ear(); earL.position.set(-0.13, 0.24, -0.02); earL.rotation.z = 0.2; earL.rotation.x = -0.08;
    var earR = ear(); earR.position.set(0.13, 0.24, -0.02); earR.rotation.z = -0.2; earR.rotation.x = -0.08; head.add(earL, earR);
    // legs
    function leg(x, z) { var grp = new THREE.Group(); var up = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.34, 6, 8), tan); up.position.y = 0.3; var paw = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), tanLt); paw.scale.set(1, 0.6, 1.4); paw.position.set(0, 0.05, 0.05); grp.add(up, paw); grp.position.set(x, 0, z); return grp; }
    var l1 = leg(-0.2, 0.42), l2 = leg(0.2, 0.42), l3 = leg(-0.2, -0.52), l4 = leg(0.2, -0.52);
    // bushy low tail
    var tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.5, 8, 10), tan); tail.position.set(0, 0.42, -0.92); tail.rotation.x = 1.0;
    var tailTip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), blk); tailTip.position.set(0, 0.13, -1.12);
    g.add(body, chest, saddle, rump, neck, head, l1, l2, l3, l4, tail, tailTip);
    g.traverse(function (o) { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.userData = { kind: 'shepherd', body: body, head: head, tail: tail, eL: eL, eR: eR, earL: earL, earR: earR, t: Math.random() * 6, hop: 0 };
    g.scale.setScalar(0.5);
    return g;
  }


  // Lazy-load a rigged glTF animal for the dog (CC0 model "Fox" by PixelMannen,
  // animation CC-BY tomkranis). Only when the 3D layer is active. Robust
  // fallback: on any error the procedural dog stays.
  function loadDogModel() {
    import('./vendor/GLTFLoader.js').then(function (m) {
      var loader = new m.GLTFLoader();
      loader.load('vendor/Fox.glb', function (gltf) {
        try {
          var model = gltf.scene;
          model.scale.setScalar(0.026);
          model.rotation.y = Math.PI * 0.16;
          model.traverse(function (o) {
            if (!o.isMesh) return;
            o.castShadow = true; o.receiveShadow = true;
            // Tune the fox's own material in place (keeps its albedo texture + skinning);
            // scene.environment adds realistic reflections.
            if (o.material) { o.material.roughness = 0.72; o.material.metalness = 0; o.material.envMapIntensity = 0.7; o.material.needsUpdate = true; }
          });
          while (petDog.children.length) petDog.remove(petDog.children[0]);
          petDog.add(model);
          var mixer = new THREE.AnimationMixer(model);
          var clips = gltf.animations || [];
          var idleClip = THREE.AnimationClip.findByName(clips, 'Survey') || clips[0];
          if (idleClip) mixer.clipAction(idleClip).play();
          var runClip = THREE.AnimationClip.findByName(clips, 'Run') || THREE.AnimationClip.findByName(clips, 'Walk');
          petDog.userData = { glb: true, mixer: mixer, hop: 0, idleClip: idleClip, runClip: runClip, clips: clips };
          mixer.update(0);
        } catch (e) { /* keep procedural dog */ }
      }, undefined, function () { /* load failed → keep procedural dog */ });
    }).catch(function () { /* loader import failed → keep procedural dog */ });
  }

  function buildShadowCatcher() {
    // transparent plane that only shows shadows → grounded contact shadow even over the AR camera.
    var sp = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.4 }));
    sp.rotation.x = -Math.PI / 2; sp.position.y = 0.002; sp.receiveShadow = true; sp.name = 'shadowcatcher';
    scene.add(sp);
  }

  // ---- procedural low-poly pets with idle animation ----
  function makePet(kind) {
    var g = new THREE.Group();
    var col = kind === 'dog' ? 0xc2cfe0 : 0xf0a44a, dark = kind === 'dog' ? 0x7f93aa : 0xd4812c;
    var fur = new THREE.MeshStandardMaterial({ color: col, roughness: 0.85 });
    var furD = new THREE.MeshStandardMaterial({ color: dark, roughness: 0.85 });
    var body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 16), fur); body.scale.set(1, 0.92, 1.15); body.position.y = 0.42;
    var head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), fur); head.position.set(0, 0.96, 0.2);
    var snout = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 12), furD); snout.scale.set(1, 0.8, 1.25); snout.position.set(0, 0.89, 0.46);
    var nose = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshStandardMaterial({ color: 0x20141c })); nose.position.set(0, 0.91, 0.58);
    var eyeMat = new THREE.MeshStandardMaterial({ color: 0x15151f });
    var eL = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), eyeMat); eL.position.set(-0.11, 1.03, 0.46);
    var eR = eL.clone(); eR.position.x = 0.11;
    var earGeo = kind === 'dog' ? new THREE.CapsuleGeometry(0.06, 0.16, 4, 8) : new THREE.ConeGeometry(0.12, 0.24, 12);
    var earL = new THREE.Mesh(earGeo, furD), earR = earL.clone();
    if (kind === 'dog') { earL.position.set(-0.23, 1.12, 0.1); earR.position.set(0.23, 1.12, 0.1); earL.rotation.z = 0.45; earR.rotation.z = -0.45; }
    else { earL.position.set(-0.16, 1.24, 0.12); earR.position.set(0.16, 1.24, 0.12); }
    var tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, kind === 'cat' ? 0.42 : 0.26, 4, 8), fur);
    tail.position.set(0, 0.5, -0.46); tail.rotation.x = -0.7;
    [[-0.2, 0.22], [0.2, 0.22], [-0.2, -0.18], [0.2, -0.18]].forEach(function (p) {
      var leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 10), furD); leg.position.set(p[0], 0.15, p[1]); g.add(leg);
    });
    g.add(body, head, snout, nose, eL, eR, earL, earR, tail);
    g.traverse(function (o) { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.userData = { kind: kind, body: body, head: head, tail: tail, eL: eL, eR: eR, t: Math.random() * 6, hop: 0 };
    g.scale.setScalar(0.74);
    return g;
  }

  function onResize() {
    if (!renderer) return;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    var portrait = window.innerHeight > window.innerWidth;
    camera.position.set(0, 1.7, portrait ? 6.6 : 5.4);
    camera.lookAt(0, 0.7, 0);
    camera.updateMatrixWorld();
  }

  function frame() {
    var cv = renderer.domElement;
    if (document.body.classList.contains('in-game')) { cv.style.opacity = '0'; return; } // game is fullscreen
    cv.style.opacity = '1';
    var dt = clock.getDelta();
    var ar = $('bg') && $('bg').classList.contains('cam-on');
    var mode = (window.__CONSOLA_BG && window.__CONSOLA_BG()) || 'room';
    if (ar) { roomGroup.visible = false; spaceGroup.visible = false; scene.fog = null; }
    else {
      var sp = mode === 'space';
      roomGroup.visible = !sp; spaceGroup.visible = sp; scene.fog = sp ? fogSpace : fogRoom;
      if (sp && spaceGroup.userData.stars && animPets) spaceGroup.userData.stars.rotation.y += dt * 0.012;
    }
    // pets follow the TV's placed position (x) and size (s)
    var a = (window.__CONSOLA_TV && window.__CONSOLA_TV()) || { x: 0, y: 0, s: 0.6 };
    var wx = (a.x || 0) * 0.006, sp = 2.25 * (0.82 + (a.s || 0.6) * 0.42), ps = 0.68 + (a.s || 0.6) * 0.12;
    petDog.position.x += (wx - sp - petDog.position.x) * 0.15; petDog.scale.setScalar(ps);
    petCat.position.x += (wx + sp - petCat.position.x) * 0.15; petCat.scale.setScalar(ps);
    if (petDog.userData.mixer) { if (animPets) petDog.userData.mixer.update(dt); hopUpdate(petDog, dt); }
    else if (animPets) idle(petDog, dt);
    if (animPets) idle(petCat, dt);
    renderer.render(scene, camera);
  }

  function idle(p, dt) {
    var u = p.userData; u.t += dt;
    if (u.bodyBaseY === undefined) u.bodyBaseY = u.body.scale.y;
    u.body.scale.y = u.bodyBaseY * (1 + Math.sin(u.t * 1.8) * 0.04); // breathing (keeps proportions)
    var blink = (Math.sin(u.t * 0.7) > 0.98) ? 0.1 : 1; u.eL.scale.y = u.eR.scale.y = blink;
    u.head.rotation.z = Math.sin(u.t * 0.9) * 0.05;
    if (u.kind === 'rabbit') {
      var flick = (Math.sin(u.t * 5.3) > 0.82) ? 0.18 : 0;      // occasional ear flick
      u.earL.rotation.z = 0.16 + flick; u.earR.rotation.z = -0.16 - flick * 0.6;
      if (u.nose) u.nose.scale.setScalar(1 + (Math.sin(u.t * 9) > 0.55 ? 0.35 : 0)); // nose twitch
      u.head.rotation.y = Math.sin(u.t * 0.5) * 0.2;             // slow look-around
    } else if (u.kind === 'shepherd') {
      u.tail.rotation.z = Math.sin(u.t * 3.5) * 0.3;             // gentle wag
      var ef = (Math.sin(u.t * 4.1) > 0.9) ? 0.14 : 0;
      u.earL.rotation.z = 0.2 + ef; u.earR.rotation.z = -0.2 - ef;
      u.head.rotation.y = Math.sin(u.t * 0.4) * 0.16;            // looks around
    } else if (u.tail) {
      u.tail.rotation.z = Math.sin(u.t * (u.kind === 'cat' ? 4 : 5)) * 0.55;
    }
    if (u.hop > 0) { u.hop -= dt * 3; p.position.y = Math.max(0, Math.sin(u.hop * Math.PI) * 0.42); } else p.position.y = 0;
  }
  function hopUpdate(p, dt) { var u = p.userData; if (u.hop > 0) { u.hop -= dt * 3; p.position.y = Math.max(0, Math.sin(u.hop * Math.PI) * 0.3); } else p.position.y = 0; }

  function onPointer(e) {
    if (!inited || document.body.classList.contains('in-game')) return;
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    var hit = raycaster.intersectObjects([petDog, petCat], true)[0];
    if (hit) { var p = hit.object; while (p && p !== petDog && p !== petCat) p = p.parent; if (p) { p.userData.hop = 1; petSound(p.userData.kind); } }
  }
  var AC;
  function petSound(kind) {
    try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume();
      var o = AC.createOscillator(), g = AC.createGain(); o.connect(g); g.connect(AC.destination); var t0 = AC.currentTime;
      if (kind === 'dog' || kind === 'shepherd') { o.type = 'sawtooth'; o.frequency.setValueAtTime(210, t0); o.frequency.exponentialRampToValueAtTime(120, t0 + 0.14); g.gain.setValueAtTime(0.12, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18); o.start(t0); o.stop(t0 + 0.2); }
      else if (kind === 'rabbit') { o.type = 'sine'; o.frequency.setValueAtTime(900, t0); o.frequency.linearRampToValueAtTime(1180, t0 + 0.08); g.gain.setValueAtTime(0.08, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.14); o.start(t0); o.stop(t0 + 0.16); } // soft squeak
      else { o.type = 'triangle'; o.frequency.setValueAtTime(620, t0); o.frequency.linearRampToValueAtTime(880, t0 + 0.12); o.frequency.linearRampToValueAtTime(520, t0 + 0.28); g.gain.setValueAtTime(0.1, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.32); o.start(t0); o.stop(t0 + 0.34); }
    } catch (e) {}
  }

  function start() {
    try { init(); } catch (e) {
      try { document.body.classList.remove('webgl-on'); if (renderer) renderer.domElement.remove(); } catch (_) {}
      console.warn('tv3d disabled:', e && e.message);
    }
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(start, 300);
  else window.addEventListener('DOMContentLoaded', function () { setTimeout(start, 300); });

  window.__TV3D = { get on() { return inited; }, tier: TIER };
})();
