/* Consola KMM — a virtual TV + game console in the browser.
   Vanilla JS, no dependencies. Camera (rear AR) stays 100% on the device:
   getUserMedia frames are only drawn to a local <video>, never uploaded,
   recorded or sent anywhere. */
(function () {
  'use strict';

  var TEST = new URLSearchParams(location.search).has('test');
  var $ = function (id) { return document.getElementById(id); };
  var I = window.CONSOLA_I18N;
  var firstRun = !I.stored();
  var lang = I.pick();

  function t() { return I.get(lang); }

  // ---------- language ----------
  function applyLang() {
    var s = t();
    document.documentElement.lang = lang;
    document.documentElement.dir = I.isRTL(lang) ? 'rtl' : 'ltr';
    $('idleSub').textContent = s.idleSub;
    $('titleMine').textContent = s.titleMine;
    $('titleFree').textContent = s.titleFree;
    $('freeNote').textContent = s.freeNote;
    $('search').placeholder = s.search;
    $('langText').textContent = lang.toUpperCase();
    $('homeText').textContent = s.home;
    $('installText').textContent = s.install;
    $('padText').textContent = s.padConnected;
    $('camLabel').textContent = camOn ? s.camOn : s.camOff;
    $('pasteSummary').textContent = s.pasteSummary;
    $('pasteHelp').textContent = s.pasteHelp;
    $('pasteGo').textContent = s.pasteGo;
    $('rotateMsg').textContent = s.rotate;
    renderFilters();
    renderGrids();
  }
  function setLang(code) {
    lang = code;
    try { localStorage.setItem('arcade.lang', code); } catch (e) {}
    applyLang();
  }

  // Searchable language picker (also the first-run chooser). Handles ~100 langs:
  // a filtered list, so it stays fast and scrolls.
  var pickerEl = null;
  function openPicker() {
    if (pickerEl) { pickerEl.hidden = false; focusSearch(); return; }
    var s = t();
    pickerEl = document.createElement('div');
    pickerEl.className = 'lang-overlay';
    pickerEl.innerHTML =
      '<div class="lang-sheet" role="dialog" aria-modal="true" aria-label="' + esc(s.chooseLang) + '">' +
        '<div class="lang-head">' +
          '<h2 id="langTitle">' + esc(s.chooseLang) + '</h2>' +
          '<button class="lang-close" type="button" aria-label="X">✕</button>' +
        '</div>' +
        '<input class="lang-search search" type="search" aria-label="' + esc(s.searchLang) + '" placeholder="' + esc(s.searchLang) + '" />' +
        '<div class="lang-list" role="listbox"></div>' +
      '</div>';
    document.body.appendChild(pickerEl);
    var listEl = pickerEl.querySelector('.lang-list');
    var searchEl = pickerEl.querySelector('.lang-search');
    pickerEl.querySelector('.lang-close').addEventListener('click', closePicker);
    pickerEl.addEventListener('click', function (e) { if (e.target === pickerEl) closePicker(); });

    function renderList(q) {
      q = (q || '').toLowerCase().trim();
      listEl.innerHTML = '';
      I.LANGS.forEach(function (L) {
        if (q && L.label.toLowerCase().indexOf(q) < 0 && L.code.toLowerCase().indexOf(q) < 0 &&
            (L.q || '').toLowerCase().indexOf(q) < 0) return;
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'lang-item' + (L.code === lang ? ' cur' : '');
        b.setAttribute('role', 'option');
        if (L.code === lang) b.setAttribute('aria-selected', 'true');
        b.innerHTML = '<span class="lang-native" dir="' + (L.rtl ? 'rtl' : 'ltr') + '">' + esc(L.label) + '</span>' +
          '<span class="lang-code">' + esc(L.code.toUpperCase()) + '</span>';
        b.addEventListener('click', function () { setLang(L.code); closePicker(); });
        listEl.appendChild(b);
      });
    }
    searchEl.addEventListener('input', function () { renderList(searchEl.value); });
    renderList('');
    function focusSearch() { try { searchEl.focus(); } catch (e) {} }
    pickerEl._focus = focusSearch;
    focusSearch();
  }
  function focusSearch() { if (pickerEl && pickerEl._focus) pickerEl._focus(); }
  function closePicker() { if (pickerEl) pickerEl.hidden = true; }

  $('langBtn').addEventListener('click', openPicker);

  // ---------- sound (WebAudio power-on chord) ----------
  function powerSound() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      var ac = new AC();
      var notes = [220, 330, 440, 660];
      notes.forEach(function (f, i) {
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = 'triangle'; o.frequency.value = f;
        var ts = ac.currentTime + i * 0.09;
        g.gain.setValueAtTime(0, ts);
        g.gain.linearRampToValueAtTime(0.12, ts + 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, ts + 0.5);
        o.connect(g); g.connect(ac.destination);
        o.start(ts); o.stop(ts + 0.55);
      });
    } catch (e) {}
  }

  // ---------- boot ----------
  function boot() {
    var tips = t().bootTips, tip = $('bootTip'), i = 0;
    tip.textContent = tips[0];
    var iv = setInterval(function () { i++; if (tips[i]) tip.textContent = tips[i]; }, 480);
    // sound needs a gesture on many browsers; try, harmless if blocked.
    if (!TEST) powerSound();
    setTimeout(function () {
      clearInterval(iv);
      $('boot').classList.add('off');
      $('app').hidden = false;
      setTimeout(function () { $('boot').hidden = true; }, 650);
      // First-ever visit (no saved language): let them pick from the full list.
      if (firstRun && !TEST) setTimeout(openPicker, 300);
    }, TEST ? 350 : 2100);
  }

  // ---------- camera (rear AR) ----------
  var camStream = null, camOn = false;
  var bg = $('bg'), video = $('cam');

  function stopCam() {
    if (camStream) { camStream.getTracks().forEach(function (tr) { tr.stop(); }); camStream = null; }
    video.srcObject = null; video.classList.remove('on');
    bg.classList.remove('cam-on'); camOn = false;
    $('camBtn').setAttribute('aria-pressed', 'false');
    $('camLabel').textContent = t().camOff;
  }

  function startCam() {
    if (TEST) { showRoom(t().camDenied); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { showRoom(t().camDenied); return; }
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } }, audio: false
    }).then(function (stream) {
      camStream = stream; video.srcObject = stream;
      video.classList.add('on'); bg.classList.add('cam-on'); camOn = true;
      $('camBtn').setAttribute('aria-pressed', 'true');
      $('camLabel').textContent = t().camOn;
    }).catch(function () { showRoom(t().camDenied); });
  }

  var toastTimer;
  function showRoom(msg) {
    stopCam();
    if (msg) toast(msg);
  }
  function toast(msg) {
    var el = $('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast';
      el.style.cssText = 'position:fixed;left:50%;bottom:84px;transform:translateX(-50%);z-index:40;max-width:90vw;' +
        'background:rgba(8,10,20,.92);border:1px solid rgba(140,170,255,.3);color:#eaf0ff;padding:10px 16px;' +
        'border-radius:12px;font-size:13px;box-shadow:0 10px 30px #0008;text-align:center';
      document.body.appendChild(el); }
    el.textContent = msg; el.style.opacity = '1';
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.style.opacity = '0'; }, 4200);
  }

  $('camBtn').addEventListener('click', function () {
    if (camOn) { stopCam(); toast(t().camOff); } else { startCam(); }
  });

  // ---------- library ----------
  var GAMES = window.CONSOLA_GAMES || [];
  var FREE = window.CONSOLA_FREE || [];
  var activeFilter = 'all';
  var query = '';

  function withLang(url) {
    try {
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'lang=' + lang;
    } catch (e) { return url; }
  }

  function categories() {
    var set = {};
    GAMES.forEach(function (g) { if (g.category) set[g.category] = true; });
    return Object.keys(set).sort();
  }

  function renderFilters() {
    var box = $('filters'); box.innerHTML = '';
    var cats = ['all'].concat(categories());
    cats.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'chip' + (c === activeFilter ? ' on' : '');
      b.textContent = c === 'all' ? t().all : c;
      b.setAttribute('role', 'tab');
      b.addEventListener('click', function () { activeFilter = c; renderFilters(); renderGrids(); });
      box.appendChild(b);
    });
  }

  function matches(g) {
    if (activeFilter !== 'all' && g.category !== activeFilter) return false;
    if (query) {
      var hay = (g.name + ' ' + (g.category || '')).toLowerCase();
      if (hay.indexOf(query) < 0) return false;
    }
    return true;
  }

  function makeCart(g) {
    var el = document.createElement('button');
    el.className = 'cart'; el.type = 'button'; el.setAttribute('role', 'listitem');
    el.dataset.id = g.id;
    el.style.setProperty('--c1', (g.accent && g.accent[0]) || '#5bd6ff');
    el.style.setProperty('--c2', (g.accent && g.accent[1]) || '#b07bff');
    var s = t();
    var credit = g.free ? '<div class="cart-credit">' + s.freeBy + ' ' + esc(g.credit) +
      (g.license ? ' · ' + esc(g.license) : '') + '</div>' : '';
    var extTag = g.external ? '<span class="cart-ext">▶</span>' : '';
    el.innerHTML = extTag +
      '<div class="cart-ico">' + esc(g.icon || '🎮') + '</div>' +
      '<div class="cart-name">' + esc(g.name) + '</div>' +
      '<div class="cart-cat">' + esc(g.category || '') + '</div>' + credit;
    el.setAttribute('aria-label', (g.external ? s.open : s.play) + ' ' + g.name);
    el.addEventListener('click', function () { launch(g); });
    return el;
  }

  function renderGrids() {
    var mine = $('gridMine'), free = $('gridFree');
    mine.innerHTML = ''; free.innerHTML = '';
    GAMES.filter(matches).forEach(function (g) { mine.appendChild(makeCart(g)); });
    // free games ignore the category filter (own section) but honor search
    var freeList = FREE.filter(function (g) {
      if (!query) return true;
      return (g.name + ' ' + (g.category || '')).toLowerCase().indexOf(query) >= 0;
    });
    freeList.forEach(function (g) { free.appendChild(makeCart(g)); });
    $('titleFree').style.display = freeList.length ? '' : 'none';
    $('freeNote').style.display = freeList.length ? '' : 'none';
    selIndex = -1;
  }

  function esc(x) { return String(x == null ? '' : x).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  $('search').addEventListener('input', function (e) { query = e.target.value.trim().toLowerCase(); renderGrids(); });

  // ---------- launching a game ----------
  var current = null;
  function launch(g) {
    current = g;
    var frame = $('gameFrame'), idle = $('screenIdle'), ext = $('screenExt');
    idle.hidden = true;
    if (g.external) {
      frame.hidden = true; frame.src = 'about:blank';
      ext.hidden = false;
      $('extIcon').textContent = g.icon || '🎮';
      $('extName').textContent = g.name;
      $('extNote').textContent = t().extNote;
      $('extOpen').onclick = function () { window.open(withLang(g.url), '_blank', 'noopener'); };
    } else {
      ext.hidden = true;
      frame.hidden = false;
      frame.removeAttribute('sandbox');
      frame.onload = focusFrame;
      frame.src = withLang(g.url);
      focusFrameSoon();
    }
    $('homeBtn').hidden = false;
    document.body.classList.add('in-game');
    $('tvScreen').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function launchPasted(url) {
    current = { id: 'pasted', name: url, external: false };
    var frame = $('gameFrame');
    $('screenIdle').hidden = true; $('screenExt').hidden = true;
    frame.hidden = false;
    // Untrusted: sandbox it (allow scripts + same-origin-less execution, no top navigation).
    frame.setAttribute('sandbox', 'allow-scripts allow-pointer-lock allow-forms allow-popups');
    frame.onload = focusFrame;
    frame.src = url;
    focusFrameSoon();
    $('homeBtn').hidden = false;
    document.body.classList.add('in-game');
    $('tvScreen').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function goHome() {
    var frame = $('gameFrame');
    frame.src = 'about:blank'; frame.hidden = true; frame.removeAttribute('sandbox');
    $('screenExt').hidden = true; $('screenIdle').hidden = false;
    $('homeBtn').hidden = true; current = null;
    document.body.classList.remove('in-game');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  $('homeBtn').addEventListener('click', goHome);

  // Embedded games (e.g. Astray) read keyboard input, so the iframe must hold
  // focus. Focus it on load, and re-grab focus whenever the player taps the TV.
  function focusFrame() {
    var f = $('gameFrame');
    if (current && !current.external && !f.hidden) { try { f.focus(); } catch (e) {} }
  }
  function focusFrameSoon() { setTimeout(focusFrame, 120); setTimeout(focusFrame, 700); setTimeout(focusFrame, 1600); }
  ['pointerdown', 'touchstart', 'click'].forEach(function (ev) {
    $('tvScreen').addEventListener(ev, function () { focusFrame(); });
  });

  // paste link
  $('pasteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var u = $('pasteUrl').value.trim();
    if (/^https?:\/\//i.test(u)) launchPasted(u);
    else toast('URL ?');
  });

  // ---------- navigation (keyboard / gamepad / touch) ----------
  var selIndex = -1;
  function visibleCarts() { return Array.prototype.slice.call(document.querySelectorAll('.grid .cart')); }
  function setSel(i) {
    var carts = visibleCarts();
    if (!carts.length) return;
    carts.forEach(function (c) { c.classList.remove('sel'); });
    selIndex = (i + carts.length) % carts.length;
    var el = carts[selIndex];
    el.classList.add('sel');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function colsCount() {
    var carts = visibleCarts(); if (carts.length < 2) return 1;
    var top = carts[0].getBoundingClientRect().top, n = 0;
    for (var i = 0; i < carts.length; i++) {
      if (Math.abs(carts[i].getBoundingClientRect().top - top) < 4) n++; else break;
    }
    return Math.max(1, n);
  }
  function nav(dir) {
    if (current) return; // in game → let the game have the input
    var carts = visibleCarts(); if (!carts.length) return;
    if (selIndex < 0) { setSel(0); return; }
    var cols = colsCount();
    if (dir === 'left') setSel(selIndex - 1);
    else if (dir === 'right') setSel(selIndex + 1);
    else if (dir === 'up') setSel(selIndex - cols);
    else if (dir === 'down') setSel(selIndex + cols);
  }
  function activate() {
    if (current) return;
    var carts = visibleCarts();
    if (selIndex >= 0 && carts[selIndex]) carts[selIndex].click();
  }

  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (pickerEl && !pickerEl.hidden) { if (k === 'Escape') closePicker(); return; }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].indexOf(k) >= 0) {
      if (document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
      var map = { ArrowUp: 'up', w: 'up', W: 'up', ArrowDown: 'down', s: 'down', S: 'down',
        ArrowLeft: 'left', a: 'left', A: 'left', ArrowRight: 'right', d: 'right', D: 'right' };
      if (!current) { e.preventDefault(); nav(map[k]); }
    } else if (k === 'Enter' || k === ' ') {
      if (document.activeElement && /INPUT|TEXTAREA|BUTTON|SUMMARY/.test(document.activeElement.tagName)) return;
      if (!current) { e.preventDefault(); activate(); }
    } else if (k === 'Escape' || k === 'Backspace') {
      if (document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
      if (current) { e.preventDefault(); goHome(); }
    }
  });

  // Gamepad
  var padState = {}, padConnected = false;
  window.addEventListener('gamepadconnected', function () { showPad(true); });
  window.addEventListener('gamepaddisconnected', function () {
    var pads = navigator.getGamepads ? navigator.getGamepads() : [];
    var any = false; for (var i = 0; i < pads.length; i++) if (pads[i]) any = true;
    if (!any) showPad(false);
  });
  function showPad(on) { padConnected = on; $('padIndicator').hidden = !on; }
  function edge(btn, pressed) {
    var was = padState[btn]; padState[btn] = pressed;
    return pressed && !was;
  }
  function pollPads() {
    var pads = navigator.getGamepads ? navigator.getGamepads() : [];
    var gp = null; for (var i = 0; i < pads.length; i++) if (pads[i]) { gp = pads[i]; break; }
    if (gp) {
      if (!padConnected) showPad(true);
      var b = gp.buttons, ax = gp.axes;
      var up = (b[12] && b[12].pressed) || ax[1] < -0.5;
      var down = (b[13] && b[13].pressed) || ax[1] > 0.5;
      var left = (b[14] && b[14].pressed) || ax[0] < -0.5;
      var right = (b[15] && b[15].pressed) || ax[0] > 0.5;
      if (edge('up', up)) nav('up');
      if (edge('down', down)) nav('down');
      if (edge('left', left)) nav('left');
      if (edge('right', right)) nav('right');
      if (edge('a', b[0] && b[0].pressed)) activate();
      if (edge('b', b[1] && b[1].pressed)) { if (current) goHome(); }
      if (edge('start', b[9] && b[9].pressed)) { if (current) goHome(); }
    }
    requestAnimationFrame(pollPads);
  }
  requestAnimationFrame(pollPads);

  // Touch controls
  var touch = $('touchpad'), toggle = $('touchToggle');
  var isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (isTouch || TEST) { toggle.hidden = false; }
  var touchVisible = false;
  toggle.addEventListener('click', function () {
    touchVisible = !touchVisible; touch.hidden = !touchVisible;
    toggle.setAttribute('aria-pressed', touchVisible ? 'true' : 'false');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.dpad .d'), function (d) {
    d.addEventListener('click', function () { nav(d.dataset.dir); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.abxy .ab'), function (btn) {
    btn.addEventListener('click', function () {
      var k = btn.dataset.btn;
      if (k === 'A') activate();
      else if (k === 'B') { if (current) goHome(); }
      else if (k === 'START') { if (current) goHome(); else window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
  });

  // ---------- fullscreen + orientation ----------
  $('fsBtn').addEventListener('click', function () {
    try {
      if (!document.fullscreenElement) {
        var el = document.documentElement;
        (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
        if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () {});
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || function () {}).call(document);
      }
    } catch (e) {}
  });

  function checkOrient() {
    var portrait = window.matchMedia('(orientation: portrait)').matches && window.innerWidth < 680;
    $('rotate').hidden = !portrait;
  }
  window.addEventListener('resize', checkOrient);
  window.addEventListener('orientationchange', checkOrient);

  // ---------- PWA ----------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); deferredPrompt = e; $('installBtn').hidden = false;
  });
  $('installBtn').addEventListener('click', function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () { deferredPrompt = null; $('installBtn').hidden = true; });
  });

  // ---------- go ----------
  applyLang();
  boot();
  checkOrient();
  if (!TEST) startCam(); else showRoom('');

  // expose a tiny hook for tests
  window.__CONSOLA_READY__ = true;
})();
