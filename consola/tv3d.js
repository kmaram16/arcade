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
  var roomGroup, keyLight, inited = false;

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
    renderer.toneMappingExposure = 1.05;
    if (c.shadows) { renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; }
    var cv = renderer.domElement;
    cv.id = 'gl'; cv.style.cssText = 'position:fixed;inset:0;z-index:4;pointer-events:none;';
    document.body.appendChild(cv);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
    clock = new THREE.Clock();
    raycaster = new THREE.Raycaster();

    buildLights(c);
    buildRoom();
    buildShadowCatcher();
    petDog = makePet('dog'); petDog.position.set(-2.3, 0, 0.6); petDog.rotation.y = 0.55; scene.add(petDog);
    petCat = makePet('cat'); petCat.position.set(2.3, 0, 0.6); petCat.rotation.y = -0.55; scene.add(petCat);

    window.addEventListener('resize', onResize);
    document.body.addEventListener('pointerdown', onPointer, true);
    onResize();
    inited = true;
    document.body.classList.add('webgl-on');
    renderer.setAnimationLoop(frame);
  }

  function buildLights(c) {
    scene.add(new THREE.HemisphereLight(0xbcd0ff, 0x202435, 0.6));
    scene.add(new THREE.AmbientLight(0x4a5a8c, 0.35));
    keyLight = new THREE.DirectionalLight(0xfff0e0, 2.2);
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
    var fill = new THREE.DirectionalLight(0x6a8cff, 0.55); fill.position.set(-4, 3, 2); scene.add(fill);
    var glow = new THREE.PointLight(0x7c5cff, 0.5, 14); glow.position.set(0, 2.2, 1.5); scene.add(glow);
  }

  function buildRoom() {
    roomGroup = new THREE.Group();
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshStandardMaterial({ color: 0x141829, roughness: 0.5, metalness: 0.12 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; roomGroup.add(floor);
    var wall = new THREE.Mesh(new THREE.PlaneGeometry(50, 20), new THREE.MeshStandardMaterial({ color: 0x1a1f36, roughness: 0.92 }));
    wall.position.set(0, 9, -7); wall.receiveShadow = true; roomGroup.add(wall);
    // soft nebula accents on the back wall (emissive spots)
    [[-5, 5, 0x5b3bbf], [6, 7, 0x2b6cff]].forEach(function (a) {
      var s = new THREE.Mesh(new THREE.CircleGeometry(3.2, 24), new THREE.MeshBasicMaterial({ color: a[2], transparent: true, opacity: 0.1 }));
      s.position.set(a[0], a[1], -6.9); roomGroup.add(s);
    });
    scene.add(roomGroup);
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
    if (roomGroup) roomGroup.visible = !ar; // AR: show the real room, keep pets + shadow
    if (animPets) { idle(petDog, dt); idle(petCat, dt); }
    renderer.render(scene, camera);
  }

  function idle(p, dt) {
    var u = p.userData; u.t += dt;
    u.body.scale.y = 0.92 * (1 + Math.sin(u.t * 1.8) * 0.045);
    u.tail.rotation.z = Math.sin(u.t * (u.kind === 'cat' ? 4 : 5)) * 0.55;
    var blink = (Math.sin(u.t * 0.7) > 0.98) ? 0.1 : 1; u.eL.scale.y = u.eR.scale.y = blink;
    u.head.rotation.z = Math.sin(u.t * 0.9) * 0.05;
    if (u.hop > 0) { u.hop -= dt * 3; p.position.y = Math.max(0, Math.sin(u.hop * Math.PI) * 0.42); } else p.position.y = 0;
  }

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
      if (kind === 'dog') { o.type = 'sawtooth'; o.frequency.setValueAtTime(210, t0); o.frequency.exponentialRampToValueAtTime(120, t0 + 0.14); g.gain.setValueAtTime(0.12, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18); o.start(t0); o.stop(t0 + 0.2); }
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
