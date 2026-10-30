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
    var dl = function (id, v) { var el = $(id); if (el && v) el.textContent = v; };
    dl('dlTitle', s.dlTitle); dl('dlIntro', s.dlIntro); dl('dlWin', s.dlWin);
    dl('dlAndroid', s.dlAndroid); dl('dlPwa', s.dlPwa); dl('dlSafe', s.dlSafe);
    $('rotateMsg').textContent = s.rotate;
    $('carHint').textContent = s.carHint || '';
    var ml = $('micLabel'); if (ml) ml.textContent = s.voice || 'Speak';
    var pl2 = $('placeLabel'); if (pl2) pl2.textContent = s.moveTv || 'Move TV';
    if (typeof setBgUI === 'function') setBgUI();
    applyBrand();
    setModeUI();
    renderFilters();
    renderGrids();
    renderHints();
    renderCarCaption();
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
    try { $('placeBtn').hidden = true; } catch (e) {}
    if (typeof exitPlace === 'function') exitPlace();
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
      $('placeBtn').hidden = false; // AR: offer tap-to-place
      if (!arPlacedOnce) { arPlacedOnce = true; setTimeout(function () { if (camOn) enterPlace(); }, 500); }
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
  // URL for a game loaded INSIDE the TV iframe: carry language + suppress the
  // arcade house-ad (promo.js honors noad=1 and also hides itself when framed).
  function embedUrl(url) {
    var u = withLang(url);
    return u + (u.indexOf('?') >= 0 ? '&' : '?') + 'noad=1';
  }

  function categories() {
    var set = {};
    GAMES.forEach(function (g) { if (g.category) set[g.category] = true; });
    return Object.keys(set).sort();
  }

  function hasApps() { return GAMES.some(function (g) { return g.kind === 'app'; }); }
  function renderFilters() {
    var box = $('filters'); box.innerHTML = '';
    var cats = ['all'];
    if (hasApps()) cats.push('__apps__');
    cats = cats.concat(categories());
    cats.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'chip' + (c === activeFilter ? ' on' : '');
      b.textContent = c === 'all' ? t().all : (c === '__apps__' ? (t().appsFilter || 'Apps') : c);
      b.setAttribute('role', 'tab');
      b.addEventListener('click', function () { activeFilter = c; renderFilters(); renderGrids(); });
      box.appendChild(b);
    });
  }

  function matches(g) {
    if (activeFilter === '__apps__') { if (g.kind !== 'app') return false; }
    else if (activeFilter !== 'all' && g.category !== activeFilter) return false;
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
    var badgeTxt = g.badge ? (g.badge[lang] || g.badge.en || g.badge.es) : '';
    var badgeTag = badgeTxt ? '<span class="cart-badge">' + esc(badgeTxt) + '</span>' : '';
    el.innerHTML = extTag + badgeTag +
      '<div class="cart-ico">' + esc(g.icon || '🎮') + '</div>' +
      '<div class="cart-name">' + esc(g.name) + '</div>' +
      '<div class="cart-cat">' + esc(g.category || '') + '</div>' + credit;
    el.setAttribute('aria-label', (g.external ? s.open : s.play) + ' ' + g.name);
    el.addEventListener('click', function () { launch(g); });
    return el;
  }

  var freeFiltered = [];
  function renderGrids() {
    var mine = $('gridMine'), free = $('gridFree');
    mine.innerHTML = ''; free.innerHTML = '';
    GAMES.filter(matches).forEach(function (g) { mine.appendChild(makeCart(g)); });
    freeFiltered = FREE.filter(function (g) {
      if (!query) return true;
      return (g.name + ' ' + (g.category || '')).toLowerCase().indexOf(query) >= 0;
    });
    freeFiltered.forEach(function (g) { free.appendChild(makeCart(g)); });
    $('titleFree').style.display = freeFiltered.length ? '' : 'none';
    $('freeNote').style.display = freeFiltered.length ? '' : 'none';
    buildCarousel();
  }

  function esc(x) { return String(x == null ? '' : x).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  $('search').addEventListener('input', function (e) { query = e.target.value.trim().toLowerCase(); renderGrids(); });

  // ---------- on-TV cover-flow carousel ----------
  var carGames = [], carIndex = 0, carEls = [], carBuiltOnce = false;
  var favs = loadFavs();
  function loadFavs() { try { return JSON.parse(localStorage.getItem('consola.favs') || '[]') || []; } catch (e) { return []; } }
  function isFav(id) { return favs.indexOf(id) >= 0; }
  function toggleFav() {
    var g0 = carGames[carIndex]; if (!g0) return;
    var i = favs.indexOf(g0.id);
    if (i >= 0) favs.splice(i, 1); else favs.push(g0.id);
    try { localStorage.setItem('consola.favs', JSON.stringify(favs)); } catch (e) {}
    blip(isFav(g0.id) ? 820 : 360);
    var cov = carEls[carIndex]; if (cov) {
      var st = cov.querySelector('.car-fav');
      if (isFav(g0.id) && !st) { var s2 = document.createElement('span'); s2.className = 'car-fav'; s2.textContent = '★'; cov.appendChild(s2); }
      else if (!isFav(g0.id) && st) st.remove();
    }
  }
  function savedCarId() { try { return localStorage.getItem('consola.car'); } catch (e) { return null; } }
  function buildCarousel() {
    var box = $('carousel'); box.innerHTML = ''; carEls = [];
    carGames = GAMES.filter(matches).concat(freeFiltered);
    // On first build restore the last-played game; afterwards keep the current one.
    var want = carBuiltOnce ? (carGames[carIndex] && carGames[carIndex].id)
                            : (savedCarId() || (carGames[carIndex] && carGames[carIndex].id));
    carBuiltOnce = true;
    var found = -1;
    for (var i = 0; i < carGames.length; i++) if (carGames[i].id === want) { found = i; break; }
    carIndex = found >= 0 ? found : 0;
    carGames.forEach(function (g, i) {
      var el = document.createElement('button');
      el.type = 'button'; el.className = 'car-cover'; el.setAttribute('role', 'option');
      el.style.setProperty('--c1', (g.accent && g.accent[0]) || '#5bd6ff');
      el.style.setProperty('--c2', (g.accent && g.accent[1]) || '#b07bff');
      el.innerHTML = (g.external ? '<span class="car-ext">▶</span>' : '') +
        (isFav(g.id) ? '<span class="car-fav">★</span>' : '') +
        '<div class="car-ico">' + esc(g.icon || '🎮') + '</div>' +
        '<div class="car-label"><span class="car-label-name">' + esc(g.name) + '</span></div>';
      // Mark same-origin arcade games as having possible hero art (lazy-loaded in
      // layoutCarousel only for visible covers; falls back to gradient+icon).
      if (!g.external && !g.free && g.url && g.url.indexOf('http') !== 0) el.dataset.shot = g.url + 'shot1.jpg';
      el.setAttribute('aria-label', g.name);
      el.addEventListener('click', function () {
        if (i === carIndex) carLaunch(); else { carIndex = i; layoutCarousel(); blip(560); }
      });
      box.appendChild(el); carEls.push(el);
    });
    layoutCarousel();
  }
  function layoutCarousel() {
    var box = $('carousel'); if (!box) return;
    var w = box.clientWidth || 600;
    var spacing = Math.max(74, Math.min(150, w * 0.26));
    carEls.forEach(function (el, i) {
      var off = i - carIndex, a = Math.abs(off);
      if (a > 3) { el.style.display = 'none'; return; }
      el.style.display = '';
      // lazy-load the hero-art screenshot for this now-visible cover (once)
      if (el.dataset.shot && !el._artTried) {
        el._artTried = true;
        (function (cover, url) {
          var img = new Image(); img.className = 'car-art'; img.alt = ''; img.decoding = 'async';
          img.onload = function () { cover.insertBefore(img, cover.firstChild); cover.classList.add('has-art'); };
          img.src = url;
        })(el, el.dataset.shot);
      }
      var ry = off < 0 ? 36 : off > 0 ? -36 : 0;
      var sc = off === 0 ? 1.12 : 0.78;
      el.style.transform = 'translate(-50%,-50%) translateX(' + (off * spacing) + 'px) translateZ(' + (-a * 70) + 'px) rotateY(' + ry + 'deg) scale(' + sc + ')';
      el.style.opacity = off === 0 ? '1' : String(Math.max(0.3, 1 - a * 0.33));
      el.style.zIndex = String(100 - a);
      el.classList.toggle('center', off === 0);
      if (off === 0) el.setAttribute('aria-selected', 'true'); else el.removeAttribute('aria-selected');
    });
    var g = carGames[carIndex];
    try { if (g) localStorage.setItem('consola.car', g.id); } catch (e) {}
    renderCarCaption();
  }
  function renderCarCaption() {
    var cap = $('carCaption'); if (!cap) return;
    var g = carGames[carIndex];
    if (!g) { cap.textContent = ''; return; }
    var s = t();
    var sub = g.free ? (s.freeBy + ' ' + g.credit + (g.license ? ' · ' + g.license : '')) : (g.category || '');
    cap.innerHTML = esc(g.name) + '<small>' + esc(sub) + '</small>';
  }
  function carMove(dir) {
    if (current || !carGames.length) return;
    var ni = Math.min(carGames.length - 1, Math.max(0, carIndex + dir));
    if (ni !== carIndex) { carIndex = ni; layoutCarousel(); blip(dir > 0 ? 520 : 460); rumbleActive(0.12, 70); }
  }
  function rumbleActive(strength, dur) {
    try { var pads = navigator.getGamepads ? navigator.getGamepads() : [];
      for (var i = 0; i < pads.length; i++) if (pads[i] && pads[i].vibrationActuator) {
        pads[i].vibrationActuator.playEffect('dual-rumble', { duration: dur || 80, strongMagnitude: strength || 0.1, weakMagnitude: (strength || 0.1) * 0.6 }); break; } } catch (e) {}
  }
  function carLaunch() { if (!current && carGames[carIndex]) { selectSound(); launch(carGames[carIndex]); } }

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
      frame.src = embedUrl(g.url);
      focusFrameSoon();
    }
    $('homeBtn').hidden = false;
    document.body.classList.add('in-game'); document.documentElement.classList.add('in-game');
    renderHints();
    window.scrollTo(0, 0);
  }

  function launchPasted(url) {
    current = { id: 'pasted', name: url, external: false };
    var frame = $('gameFrame');
    $('screenIdle').hidden = true; $('screenExt').hidden = true;
    frame.hidden = false;
    frame.setAttribute('sandbox', 'allow-scripts allow-pointer-lock allow-forms allow-popups');
    frame.onload = focusFrame;
    frame.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'noad=1';
    focusFrameSoon();
    $('homeBtn').hidden = false;
    document.body.classList.add('in-game'); document.documentElement.classList.add('in-game');
    renderHints();
    window.scrollTo(0, 0);
  }

  function goHome() {
    if (!current) return;
    var frame = $('gameFrame');
    frame.src = 'about:blank'; frame.hidden = true; frame.removeAttribute('sandbox');
    $('screenExt').hidden = true; $('screenIdle').hidden = false;
    $('homeBtn').hidden = true; current = null;
    document.body.classList.remove('in-game'); document.documentElement.classList.remove('in-game');
    renderHints();
    layoutCarousel();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  $('homeBtn').addEventListener('click', goHome);

  // Embedded games read keyboard input, so the iframe must hold focus.
  function focusFrame() {
    var f = $('gameFrame');
    if (current && !current.external && !f.hidden) { try { f.focus(); } catch (e) {} }
  }
  function focusFrameSoon() { setTimeout(focusFrame, 120); setTimeout(focusFrame, 700); setTimeout(focusFrame, 1600); }

  // paste link
  $('pasteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var u = $('pasteUrl').value.trim();
    if (/^https?:\/\//i.test(u)) launchPasted(u);
    else toast('URL ?');
  });

  // ---------- sounds (console blips) ----------
  var AC = null;
  function ac() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) {} return AC; }
  function blip(freq) {
    if (TEST) return; var c = ac(); if (!c) return;
    try { var o = c.createOscillator(), g = c.createGain(); o.type = 'square'; o.frequency.value = freq;
      g.gain.setValueAtTime(0.06, c.currentTime); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.09);
      o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + 0.1); } catch (e) {}
  }
  function selectSound() { blip(660); setTimeout(function () { blip(880); }, 70); }

  // ---------- gamepad glyphs + type detection ----------
  var GLYPHS = {
    xbox:     { a: 'A', b: 'B', x: 'X', y: 'Y', brand: 'Xbox' },
    ps:       { a: '✕', b: '○', x: '▢', y: '△', brand: 'PlayStation' },
    nintendo: { a: 'B', b: 'A', x: 'Y', y: 'X', brand: 'Nintendo' }
  };
  var padGlyphs = GLYPHS.xbox, padBrand = 'keyboard';
  function glyphsForId(id) {
    id = (id || '').toLowerCase();
    if (/playstation|dualshock|dualsense|sony|054c|wireless controller|\bps[345]?\b/.test(id)) return GLYPHS.ps;
    if (/nintendo|switch|joy-?con|057e|pro controller/.test(id)) return GLYPHS.nintendo;
    return GLYPHS.xbox;
  }
  function setPad(id) { padGlyphs = glyphsForId(id); padBrand = padGlyphs.brand; }

  // ---------- button-hint bar ----------
  function g(cls, sym) { return '<span class="glyph ' + cls + '">' + esc(sym) + '</span>'; }
  function kb(key) { return '<span class="glyph sys">' + esc(key) + '</span>'; }
  function renderHints() {
    var s = t(), bar = $('hintBar'), gl = padGlyphs, parts = [];
    if (mode === 'pc') {
      // Keyboard-focused hints
      if (current) {
        parts.push('<span class="hint">' + kb('Esc') + ' ' + esc(s.back || 'Back') + '</span>');
      } else {
        parts.push('<span class="hint">' + kb('← →') + ' ' + esc(s.move || 'Move') + '</span>');
        parts.push('<span class="hint">' + kb('Enter') + ' ' + esc(s.play || 'Play') + '</span>');
        parts.push('<span class="hint">' + kb('Esc') + ' ' + esc(s.back || 'Back') + '</span>');
        parts.push('<span class="hint">' + kb('/') + ' ' + esc(s.searchAct || 'Search') + '</span>');
        parts.push('<span class="hint">' + kb('Q/E') + ' ' + esc(s.category || 'Category') + '</span>');
      }
    } else {
      // Console / controller-focused hints with per-brand glyphs
      if (current) {
        parts.push('<span class="hint">' + g('b', gl.b) + ' ' + esc(s.back || 'Back') + '</span>');
        parts.push('<span class="hint">' + g('sys', '≡') + ' ' + esc(s.menu || 'Menu') + '</span>');
      } else {
        parts.push('<span class="hint">' + g('a', gl.a) + ' ' + esc(s.play || 'Play') + '</span>');
        parts.push('<span class="hint">' + g('b', gl.b) + ' ' + esc(s.back || 'Back') + '</span>');
        parts.push('<span class="hint">' + g('x', gl.x) + ' ' + esc(s.searchAct || 'Search') + '</span>');
        parts.push('<span class="hint">' + g('y', gl.y) + ' ' + esc(s.favorite || 'Favorite') + '</span>');
        parts.push('<span class="hint">' + g('sys', 'LB/RB') + ' ' + esc(s.category || 'Category') + '</span>');
        parts.push('<span class="hint">' + g('sys', '≡') + ' ' + esc(s.menu || 'Menu') + '</span>');
      }
    }
    bar.innerHTML = parts.join('');
  }

  // ---------- keyboard (console-style) ----------
  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (pickerEl && !pickerEl.hidden) { if (k === 'Escape') closePicker(); return; }
    if (placing) {
      var step = 28;
      if (k === 'ArrowLeft' || k === 'a' || k === 'A') { rx -= step; moveReticle(); e.preventDefault(); }
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') { rx += step; moveReticle(); e.preventDefault(); }
      else if (k === 'ArrowUp' || k === 'w' || k === 'W') { ry -= step; moveReticle(); e.preventDefault(); }
      else if (k === 'ArrowDown' || k === 's' || k === 'S') { ry += step; moveReticle(); e.preventDefault(); }
      else if (k === 'Enter' || k === ' ') { dropHere(); e.preventDefault(); }
      else if (k === 'Escape') { exitPlace(); e.preventDefault(); }
      return;
    }
    var typing = document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if (k === 'Escape' || k === 'Backspace') {
      if (typing) return;
      if (current) { e.preventDefault(); goHome(); } return;
    }
    if (current) { if (!current.external) focusFrame(); return; } // self-heal focus, let the game have the key
    if (typing) return;
    if (k === 'ArrowLeft' || k === 'a' || k === 'A') { e.preventDefault(); carMove(-1); }
    else if (k === 'ArrowRight' || k === 'd' || k === 'D') { e.preventDefault(); carMove(1); }
    else if (k === 'ArrowUp' || k === 'w' || k === 'W' || k === 'ArrowDown' || k === 's' || k === 'S') { e.preventDefault(); }
    else if (k === 'Enter' || k === ' ') { e.preventDefault(); carLaunch(); }
    else if (k === '/') { e.preventDefault(); $('search').focus(); }
    else if (k === 'q' || k === 'Q') cycleCategory(-1);
    else if (k === 'e' || k === 'E') cycleCategory(1);
  });

  function cycleCategory(dir) {
    var cats = ['all'].concat(categories());
    var i = cats.indexOf(activeFilter); i = (i + dir + cats.length) % cats.length;
    activeFilter = cats[i]; renderFilters(); renderGrids(); blip(500);
  }

  // ---------- gamepad (poll, map, rumble, hints) ----------
  var padState = {}, padConnected = false, lastAxisMove = 0;
  window.addEventListener('gamepadconnected', function (e) { if (e.gamepad) setPad(e.gamepad.id); showPad(true); });
  window.addEventListener('gamepaddisconnected', function () {
    var pads = navigator.getGamepads ? navigator.getGamepads() : [];
    var any = false; for (var i = 0; i < pads.length; i++) if (pads[i]) any = true;
    if (!any) showPad(false);
  });
  function showPad(on) {
    padConnected = on; $('padIndicator').hidden = !on;
    if (on) { $('padText').textContent = t().padConnected + (padBrand && padBrand !== 'keyboard' ? ' · ' + padBrand : ''); }
    renderHints();
  }
  function edge(btn, pressed) { var was = padState[btn]; padState[btn] = pressed; return pressed && !was; }
  function rumble(gp) { try { gp.vibrationActuator.playEffect('dual-rumble', { duration: 130, strongMagnitude: 0.35, weakMagnitude: 0.18 }); } catch (e) {} }
  function pollPads() {
    // Keep the launched game's iframe focused so keyboard input (e.g. Astray's
    // arrow keys) always reaches it, even if focus drifts back to the page.
    if (current && !current.external) {
      var ae = document.activeElement;
      if (!ae || ae === document.body || ae === document.documentElement) {
        var gf = $('gameFrame'); if (gf && !gf.hidden) { try { gf.focus(); } catch (e) {} }
      }
    }
    var pads = navigator.getGamepads ? navigator.getGamepads() : [];
    var gp = null; for (var i = 0; i < pads.length; i++) if (pads[i]) { gp = pads[i]; break; }
    if (gp) {
      if (!padConnected) { setPad(gp.id); showPad(true); }
      var b = gp.buttons, ax = gp.axes || [], now = Date.now();
      if (placing) { // AR placement: move the reticle with the stick, A drops, B cancels
        rx += (ax[0] || 0) * 9; ry += (ax[1] || 0) * 9; moveReticle();
        if (edge('a', b[0] && b[0].pressed)) dropHere();
        if (edge('b', b[1] && b[1].pressed)) exitPlace();
        requestAnimationFrame(pollPads); return;
      }
      var lx = ax[0] || 0;
      var left = (b[14] && b[14].pressed), right = (b[15] && b[15].pressed);
      if (edge('dl', left)) carMove(-1);
      if (edge('dr', right)) carMove(1);
      // analog stick with repeat throttle
      if (Math.abs(lx) > 0.55 && now - lastAxisMove > 260) { carMove(lx > 0 ? 1 : -1); lastAxisMove = now; }
      if (Math.abs(lx) < 0.3) lastAxisMove = 0;
      if (edge('a', b[0] && b[0].pressed)) { if (current) {} else { rumble(gp); carLaunch(); } }
      if (edge('b', b[1] && b[1].pressed)) { if (current) goHome(); }
      if (edge('x', b[2] && b[2].pressed)) { if (!current) $('search').focus(); }
      if (edge('y', b[3] && b[3].pressed)) { if (!current) toggleFav(); }
      if (edge('lb', b[4] && b[4].pressed)) cycleCategory(-1);
      if (edge('rb', b[5] && b[5].pressed)) cycleCategory(1);
      if (edge('start', b[9] && b[9].pressed)) { if (current) goHome(); else openPicker(); }
    }
    requestAnimationFrame(pollPads);
  }
  requestAnimationFrame(pollPads);

  // Test hook: simulate a connected pad of a given type to verify glyph switching.
  window.__applyPadId = function (id) { setPad(id); showPad(true); return padBrand; };

  // ---------- touch / mouse gestures on the TV ----------
  // (1) swipe / wheel over the screen flips the carousel (idle); taps refocus a game.
  var scr = $('tvScreen'), carBox = $('carousel');
  var sw = null;
  carBox.addEventListener('pointerdown', function (e) { if (current) return; sw = { x: e.clientX, moved: false }; });
  carBox.addEventListener('pointermove', function (e) { if (sw && Math.abs(e.clientX - sw.x) > 8) sw.moved = true; });
  carBox.addEventListener('pointerup', function (e) {
    if (!sw) return; var dx = e.clientX - sw.x;
    if (sw.moved && Math.abs(dx) > 30) carMove(dx < 0 ? 1 : -1);
    sw = null;
  });
  scr.addEventListener('wheel', function (e) {
    if (current) return; e.preventDefault();
    carMove((e.deltaX + e.deltaY) > 0 ? 1 : -1);
  }, { passive: false });
  scr.addEventListener('pointerdown', function () { focusFrame(); });

  // (2) TV size + position controls. Drag the frame/console (not the screen) to
  //     move the TV; pinch to resize; +/-/slider to resize. Persisted.
  var tvWrap = $('tvWrap');
  var tvScale = clampScale(readNum('consola.tvScale', 0.6));
  var tvX = readNum('consola.tvX', 0), tvY = readNum('consola.tvY', 0);
  function clampScale(v) { return Math.max(0.4, Math.min(1, v)); }
  function readNum(k, d) { try { var v = parseFloat(localStorage.getItem(k)); return isNaN(v) ? d : v; } catch (e) { return d; } }
  function applyTv() {
    tvWrap.style.setProperty('--tv-s', tvScale);
    tvWrap.style.setProperty('--tv-sg', Math.max(tvScale, 0.95));
    tvWrap.style.setProperty('--tv-x', tvX + 'px');
    tvWrap.style.setProperty('--tv-y', tvY + 'px');
    var r = $('sizeRange'); if (r) r.value = String(Math.round(tvScale * 100));
  }
  function setScale(v) { tvScale = clampScale(v); try { localStorage.setItem('consola.tvScale', tvScale); } catch (e) {} applyTv(); }
  $('sizeDown').addEventListener('click', function () { setScale(tvScale - 0.08); });
  $('sizeUp').addEventListener('click', function () { setScale(tvScale + 0.08); });
  $('sizeRange').addEventListener('input', function (e) { setScale(parseInt(e.target.value, 10) / 100); });

  // pointer-based drag (reposition) + pinch (resize)
  var pts = {}, pinchBase = 0, pinchScale0 = 0, dragging = null;
  tvWrap.addEventListener('pointerdown', function (e) {
    pts[e.pointerId] = { x: e.clientX, y: e.clientY };
    var ids = Object.keys(pts);
    if (ids.length === 2) { // start pinch
      pinchBase = dist(); pinchScale0 = tvScale; dragging = null;
    } else if (!current && !closestScreen(e.target)) { // start reposition (not over screen)
      dragging = { x: e.clientX, y: e.clientY, ox: tvX, oy: tvY }; try { tvWrap.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });
  tvWrap.addEventListener('pointermove', function (e) {
    if (!pts[e.pointerId]) return; pts[e.pointerId] = { x: e.clientX, y: e.clientY };
    var ids = Object.keys(pts);
    if (ids.length >= 2 && pinchBase) { var d = dist(); if (d > 0) setScale(pinchScale0 * (d / pinchBase)); }
    else if (dragging) { tvX = dragging.ox + (e.clientX - dragging.x); tvY = dragging.oy + (e.clientY - dragging.y); applyTv(); }
  });
  function endPointer(e) {
    delete pts[e.pointerId];
    if (Object.keys(pts).length < 2) pinchBase = 0;
    if (dragging && Object.keys(pts).length === 0) {
      try { localStorage.setItem('consola.tvX', tvX); localStorage.setItem('consola.tvY', tvY); } catch (_) {}
      dragging = null;
    }
  }
  tvWrap.addEventListener('pointerup', endPointer);
  tvWrap.addEventListener('pointercancel', endPointer);
  function dist() { var v = Object.keys(pts).map(function (k) { return pts[k]; }); if (v.length < 2) return 0; return Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y); }
  function closestScreen(el) { while (el) { if (el.id === 'tvScreen') return true; el = el.parentElement; } return false; }

  // ---------- AR tap-to-place: drop the TV where you tap the floor ----------
  var placing = false, reticle = null, placeHintEl = null, rx = 0, ry = 0, arPlacedOnce = false;
  function ensurePlaceEls() {
    if (reticle) return;
    reticle = document.createElement('div'); reticle.id = 'placeReticle'; reticle.setAttribute('aria-hidden', 'true');
    reticle.innerHTML = '<span></span>';
    placeHintEl = document.createElement('div'); placeHintEl.id = 'placeHint';
    document.body.appendChild(reticle); document.body.appendChild(placeHintEl);
  }
  function enterPlace() {
    if (!camOn) { toast(t().camDenied ? '' : ''); return; } // AR only
    ensurePlaceEls();
    placing = true;
    document.body.classList.add('placing');
    placeHintEl.textContent = t().placeHint || 'Tap the floor to place the TV';
    placeHintEl.hidden = false; reticle.hidden = false;
    $('placeBtn').setAttribute('aria-pressed', 'true');
    rx = window.innerWidth / 2; ry = window.innerHeight * 0.74; moveReticle();
  }
  function exitPlace() {
    placing = false; document.body.classList.remove('placing');
    if (reticle) reticle.hidden = true; if (placeHintEl) placeHintEl.hidden = true;
    $('placeBtn').setAttribute('aria-pressed', 'false');
  }
  function moveReticle() {
    if (!reticle) return;
    rx = Math.max(24, Math.min(window.innerWidth - 24, rx));
    ry = Math.max(window.innerHeight * 0.42, Math.min(window.innerHeight * 0.95, ry));
    reticle.style.left = rx + 'px'; reticle.style.top = ry + 'px';
  }
  function dropHere() {
    var W = window.innerWidth, H = window.innerHeight;
    tvX = Math.round(rx - W / 2);
    var ratio = Math.max(0, Math.min(1, (ry / H - 0.42) / 0.5)); // 0 far(high) .. 1 near(low)
    setScale(0.44 + ratio * 0.5);                                  // tap lower → bigger/nearer
    tvY = Math.round(ry - H * 0.80);                               // vertical offset from the floor line
    try { localStorage.setItem('consola.tvX', tvX); localStorage.setItem('consola.tvY', tvY); } catch (e) {}
    applyTv();
    exitPlace(); toast(t().placed || 'TV placed');
  }
  $('placeBtn').addEventListener('click', function () { if (placing) exitPlace(); else enterPlace(); });
  // pointer: hover/drag moves the reticle; tap on the floor drops the TV.
  document.addEventListener('pointermove', function (e) { if (!placing) return; rx = e.clientX; ry = e.clientY; moveReticle(); });
  document.addEventListener('click', function (e) {
    if (!placing) return;
    var el = e.target;
    while (el) { if (el.classList && (el.classList.contains('topbar') || el.classList.contains('library') || el.classList.contains('hintbar') || el.id === 'tvScreen' || el.tagName === 'BUTTON' || el.tagName === 'INPUT')) return; el = el.parentElement; }
    rx = e.clientX; ry = e.clientY; moveReticle(); dropHere();
  }, true);
  // expose current placement so the 3D pets can follow the TV base.
  window.__CONSOLA_TV = function () { return { x: tvX, y: tvY, s: tvScale }; };

  // ---------- background selector: cozy Room vs Space (camera overrides to AR) ----------
  var bgMode = (function () { try { return localStorage.getItem('consola.bg') === 'space' ? 'space' : 'room'; } catch (e) { return 'room'; } })();
  window.__CONSOLA_BG = function () { return bgMode; };
  function setBgUI() { var s = t(); $('bgIcon').textContent = bgMode === 'space' ? '🌌' : '🪟'; $('bgLabel').textContent = bgMode === 'space' ? (s.bgSpace || 'Space') : (s.bgRoom || 'Room'); document.body.classList.toggle('bg-space', bgMode === 'space'); }
  $('bgBtn').addEventListener('click', function () { bgMode = bgMode === 'space' ? 'room' : 'space'; try { localStorage.setItem('consola.bg', bgMode); } catch (e) {} setBgUI(); blip(520); });
  if (TEST) { window.__arTest = function () { camOn = true; bg.classList.add('cam-on'); $('placeBtn').hidden = false; enterPlace(); }; }

  // ---------- touch controls (on-screen pad) ----------
  var touch = $('touchpad'), toggle = $('touchToggle');
  var isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (isTouch || TEST) { toggle.hidden = false; }
  var touchVisible = false;
  toggle.addEventListener('click', function () {
    touchVisible = !touchVisible; touch.hidden = !touchVisible;
    toggle.setAttribute('aria-pressed', touchVisible ? 'true' : 'false');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.dpad .d'), function (d) {
    d.addEventListener('click', function () { var dir = d.dataset.dir; if (dir === 'left') carMove(-1); else if (dir === 'right') carMove(1); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.abxy .ab'), function (btn) {
    btn.addEventListener('click', function () {
      var k = btn.dataset.btn;
      if (k === 'A') { if (current) {} else carLaunch(); }
      else if (k === 'B') { if (current) goHome(); }
      else if (k === 'START') { if (current) goHome(); else openPicker(); }
    });
  });

  // ---------- clock + profile ----------
  function tickClock() {
    try { var d = new Date(); $('clock').textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); } catch (e) {}
  }
  function loadProfile() { var n = 'P1'; try { n = localStorage.getItem('arcade.name') || 'P1'; } catch (e) {} $('profileName').textContent = n.slice(0, 10); }
  $('profileBtn').addEventListener('click', function () {
    var n = prompt(t().renameProfile || 'Your name?', (function () { try { return localStorage.getItem('arcade.name') || ''; } catch (e) { return ''; } })());
    if (n != null) { try { localStorage.setItem('arcade.name', n.trim()); } catch (e) {} loadProfile(); }
  });

  // ---------- brand ----------
  function applyBrand() {
    var b = t().brand || 'Nebula Console';
    try { document.title = b; } catch (e) {}
    var bt = $('brandText'); if (bt) bt.innerHTML = esc(b).replace(/Nebula/i, '<b>Nebula</b>');
    var other = b.replace(/nebula/ig, '').replace(/[-\s]+/g, ' ').trim().toUpperCase();
    var bn = $('bootName'); if (bn) bn.textContent = other || 'CONSOLE';
  }

  // ---------- mode (console vs PC) ----------
  var mode = 'console';
  function savedMode() { try { return localStorage.getItem('consola.mode'); } catch (e) { return null; } }
  function setMode(m, save) {
    mode = (m === 'pc') ? 'pc' : 'console';
    document.body.classList.toggle('mode-pc', mode === 'pc');
    document.body.classList.toggle('mode-console', mode === 'console');
    if (save !== false) { try { localStorage.setItem('consola.mode', mode); } catch (e) {} }
    setModeUI();
    renderHints();
  }
  function setModeUI() {
    var s = t();
    $('modeIcon').textContent = mode === 'pc' ? '⌨️' : '🎮';
    $('modeLabel').textContent = mode === 'pc' ? (s.modePc || 'PC') : (s.modeConsole || 'Console');
  }
  $('modeBtn').addEventListener('click', function () { setMode(mode === 'pc' ? 'console' : 'pc'); blip(560); });

  // ---------- generic modal ----------
  function modal(innerHtml) {
    var ov = document.createElement('div'); ov.className = 'neb-overlay';
    ov.innerHTML = '<div class="neb-sheet" role="dialog" aria-modal="true">' + innerHtml + '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', function (e) { if (e.target === ov) {} });
    return ov;
  }

  function showModeChooser() {
    var s = t();
    var ov = modal(
      '<h2>' + esc(s.chooseMode || 'How do you want to play?') + '</h2>' +
      '<div class="mode-grid">' +
        '<button class="mode-card" data-m="console"><span class="mc-ico">🎮</span><b>' + esc(s.modeConsole || 'Console mode') + '</b><small>' + esc(s.modeConsoleHow || '') + '</small></button>' +
        '<button class="mode-card" data-m="pc"><span class="mc-ico">⌨️</span><b>' + esc(s.modePc || 'PC mode') + '</b><small>' + esc(s.modePcHow || '') + '</small></button>' +
      '</div>');
    Array.prototype.forEach.call(ov.querySelectorAll('.mode-card'), function (c) {
      c.addEventListener('click', function () { setMode(c.dataset.m); ov.remove(); maybeNoPad(); blip(660); });
    });
  }

  // ---------- "connect a controller" prompt (console mode) ----------
  var noPadEl = null;
  function maybeNoPad() {
    if (TEST || mode !== 'console') return;
    if (padConnected) return;
    if (noPadEl) return;
    var s = t();
    noPadEl = modal(
      '<div class="pad-illu">🎮</div>' +
      '<h2>' + esc(s.connectPad || 'Connect a controller') + '</h2>' +
      '<p>' + esc(s.connectPadHow || '') + '</p>' +
      '<button class="btn-small" id="npKb">' + esc(s.continueKb || 'Continue with keyboard') + '</button>');
    noPadEl.querySelector('#npKb').addEventListener('click', function () { if (noPadEl) { noPadEl.remove(); noPadEl = null; } });
  }
  function hideNoPad() { if (noPadEl) { noPadEl.remove(); noPadEl = null; } }

  // ---------- pets (CSS 3D mascots) ----------
  function petSound(kind) {
    var c = ac(); if (!c || TEST) return;
    try {
      var o = c.createOscillator(), gg = c.createGain(); o.connect(gg); gg.connect(c.destination);
      var t0 = c.currentTime;
      if (kind === 'dog') { o.type = 'sawtooth'; o.frequency.setValueAtTime(210, t0); o.frequency.exponentialRampToValueAtTime(120, t0 + 0.14);
        gg.gain.setValueAtTime(0.12, t0); gg.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18); o.start(t0); o.stop(t0 + 0.2); }
      else { o.type = 'triangle'; o.frequency.setValueAtTime(620, t0); o.frequency.linearRampToValueAtTime(880, t0 + 0.12); o.frequency.linearRampToValueAtTime(520, t0 + 0.28);
        gg.gain.setValueAtTime(0.1, t0); gg.gain.exponentialRampToValueAtTime(0.001, t0 + 0.32); o.start(t0); o.stop(t0 + 0.34); }
    } catch (e) {}
  }
  function setupPets() {
    Array.prototype.forEach.call(document.querySelectorAll('.pet'), function (p) {
      function react() { p.classList.add('happy'); petSound(p.dataset.pet); setTimeout(function () { p.classList.remove('happy'); }, 700); }
      p.addEventListener('click', react);
      p.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); react(); } });
    });
  }

  // ---------- voice control (press-to-talk, Web Speech API) ----------
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recog = null, listening = false;
  function voiceSupported() { return !!SR; }
  function srLang() { var m = { es: 'es-ES', en: 'en-US', pt: 'pt-PT', fr: 'fr-FR', de: 'de-DE', it: 'it-IT' }; return m[lang] || lang || 'en-US'; }
  function voiceIndicator(show, txt) {
    var el = $('voiceInd');
    if (!el) { el = document.createElement('div'); el.id = 'voiceInd'; el.className = 'voice-ind'; document.body.appendChild(el); }
    el.hidden = !show; if (txt != null) el.textContent = txt;
  }
  function startVoice() {
    if (!SR) { toast(t().voiceNA || 'Voice not available here'); return; }
    if (listening) { try { recog.stop(); } catch (e) {} return; }
    try { recog = new SR(); } catch (e) { toast('mic?'); return; }
    recog.lang = srLang(); recog.interimResults = true; recog.maxAlternatives = 3; recog.continuous = false;
    listening = true; voiceIndicator(true, '🎤 …'); $('micBtn').classList.add('on');
    recog.onresult = function (ev) {
      var txt = ''; for (var i = ev.resultIndex; i < ev.results.length; i++) txt += ev.results[i][0].transcript;
      voiceIndicator(true, '🎤 ' + txt);
      if (ev.results[ev.results.length - 1].isFinal) handleVoice(txt);
    };
    recog.onerror = function () { stopVoiceUI(); };
    recog.onend = function () { stopVoiceUI(); };
    try { recog.start(); } catch (e) { stopVoiceUI(); }
  }
  function stopVoiceUI() { listening = false; $('micBtn').classList.remove('on'); setTimeout(function () { voiceIndicator(false); }, 1200); }

  function norm(s) { return (s || '').toLowerCase().normalize ? (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') : (s || '').toLowerCase(); }

  // ---------- natural spoken feedback (Speech Synthesis) ----------
  var synth = window.speechSynthesis || null;
  var voicesList = [];
  var ttsOn = (function () { try { return localStorage.getItem('consola.tts') !== '0'; } catch (e) { return true; } })();
  var chosenVoiceURI = (function () { try { return localStorage.getItem('consola.voice') || ''; } catch (e) { return ''; } })();
  function loadVoices() { try { voicesList = (synth && synth.getVoices()) || []; } catch (e) { voicesList = []; } }
  if (synth) { loadVoices(); try { synth.onvoiceschanged = loadVoices; } catch (e) {} setTimeout(loadVoices, 400); setTimeout(loadVoices, 1200); }
  // Names that signal a higher-quality / natural voice across platforms.
  var GOOD_VOICE = /natural|neural|online|enhanced|premium|siri|google|wavenet|multilingual/i;
  function voicesForLang(code) {
    var base = (code || lang || 'en').slice(0, 2).toLowerCase();
    return voicesList.filter(function (v) { return (v.lang || '').slice(0, 2).toLowerCase() === base; });
  }
  function bestVoice() {
    if (!voicesList.length) return null;
    if (chosenVoiceURI) { for (var i = 0; i < voicesList.length; i++) if (voicesList[i].voiceURI === chosenVoiceURI) return voicesList[i]; }
    var cands = voicesForLang(lang);
    if (!cands.length) return null; // let the browser pick a default for the lang tag
    function score(v) {
      var s = 0, n = v.name || '';
      if (GOOD_VOICE.test(n)) s += 10;
      if (v.localService === false) s += 4;         // network/premium voices are usually nicer
      if (/female|mujer|femen/i.test(n)) s += 1;
      if ((v.lang || '').toLowerCase() === srLang().toLowerCase()) s += 2; // exact region match
      return s;
    }
    return cands.slice().sort(function (a, b) { return score(b) - score(a); })[0];
  }
  function speak(txt) {
    if (!synth || !ttsOn || TEST) return;
    try {
      synth.cancel(); // never double-speak / overlap
      var u = new SpeechSynthesisUtterance(txt);
      u.lang = srLang(); u.rate = 1.0; u.pitch = 1.0; u.volume = 1.0;
      var v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang || u.lang; }
      synth.speak(u);
    } catch (e) {}
  }
  function setTtsIcon() { var b = $('ttsBtn'); if (b) b.textContent = ttsOn ? '🔊' : '🔇'; }
  // Settings: toggle spoken feedback + choose a voice (remembered).
  $('ttsBtn').addEventListener('click', function () {
    var s = t();
    var cands = voicesForLang(lang);
    var opts = '<option value="">' + esc(s.defaultVoice || 'Automatic') + '</option>' +
      cands.map(function (v) { return '<option value="' + esc(v.voiceURI) + '"' + (v.voiceURI === chosenVoiceURI ? ' selected' : '') + '>' +
        esc(v.name) + (GOOD_VOICE.test(v.name) ? ' ★' : '') + '</option>'; }).join('');
    var ov = modal(
      '<h2>' + esc(s.voiceOut || 'Spoken voice') + '</h2>' +
      '<label class="tts-row"><input type="checkbox" id="ttsChk"' + (ttsOn ? ' checked' : '') + '> ' + esc(s.spokenFeedback || 'Speak feedback') + '</label>' +
      '<select id="voiceSel" class="search" ' + (cands.length ? '' : 'disabled') + '>' + opts + '</select>' +
      '<div class="tts-actions"><button class="btn-small" id="voiceTest" type="button">' + esc(s.testVoice || 'Test') + '</button>' +
      '<button class="btn-small ghost" id="voiceClose" type="button">' + esc(s.close || 'Close') + '</button></div>');
    var chk = ov.querySelector('#ttsChk'), sel = ov.querySelector('#voiceSel');
    chk.addEventListener('change', function () { ttsOn = chk.checked; try { localStorage.setItem('consola.tts', ttsOn ? '1' : '0'); } catch (e) {} setTtsIcon(); });
    sel.addEventListener('change', function () { chosenVoiceURI = sel.value; try { localStorage.setItem('consola.voice', chosenVoiceURI); } catch (e) {} });
    ov.querySelector('#voiceTest').addEventListener('click', function () { var was = ttsOn; ttsOn = true; speak(t().brand || 'Nebula Console'); ttsOn = was; });
    ov.querySelector('#voiceClose').addEventListener('click', function () { ov.remove(); });
  });
  function fb(txt) { voiceIndicator(true, txt); toast(txt); speak(txt); setTimeout(function () { voiceIndicator(false); }, 2000); }

  function findGame(q) {
    q = norm(q).replace(/\b(a|al|el|la|to|the|game|juego)\b/g, ' ').trim();
    if (!q) return null;
    var all = GAMES.concat(FREE), best = null, bestScore = 0;
    all.forEach(function (gm) {
      var n = norm(gm.name), id = norm(gm.id);
      var score = 0;
      if (n === q || id === q) score = 100;
      else if (n.indexOf(q) >= 0 || q.indexOf(n) >= 0) score = 60 + Math.min(20, n.length);
      else { var toks = q.split(/\s+/); toks.forEach(function (tk) { if (tk.length > 2 && n.indexOf(tk) >= 0) score += 20; }); }
      if (score > bestScore) { bestScore = score; best = gm; }
    });
    return bestScore >= 20 ? best : null;
  }
  function handleVoice(raw) {
    var tx = norm(raw);
    var s = t();
    if (!tx) return;
    // back / home
    if (/\b(menu|home|atras|salir|back|volver|inicio|pausa|pause)\b/.test(tx)) { if (current) goHome(); fb(s.menu || 'Menu'); return; }
    // next / prev
    if (/\b(next|siguiente|derecha|right|adelante)\b/.test(tx)) { carMove(1); return; }
    if (/\b(prev|previous|anterior|izquierda|left|atras)\b/.test(tx)) { carMove(-1); return; }
    // camera
    if (/\bcamera|camara\b/.test(tx)) { if (/off|apaga|quita|no/.test(tx)) { stopCam(); } else { startCam(); } fb(s.cameraAct || 'Camera'); return; }
    // center / here
    if (/(donde miro|ven aqui|aqui|put it here|center|centro|centrar)/.test(tx)) { tvX = 0; tvY = 0; applyTv(); try { localStorage.setItem('consola.tvX', 0); localStorage.setItem('consola.tvY', 0); } catch (e) {} fb('✓'); return; }
    // closer / bigger
    if (/(acercate|ven|come closer|mas cerca|closer|mas grande|bigger|grande|zoom in)/.test(tx)) { setScale(tvScale + 0.14); fb('🔍+'); return; }
    // away / smaller
    if (/(alejate|go away|mas lejos|farther|further|mas pequeno|smaller|pequeno|zoom out)/.test(tx)) { setScale(tvScale - 0.14); fb('🔍−'); return; }
    // search <text>
    var ms = tx.match(/(?:buscar|busca|search)\s+(.+)/);
    if (ms) { query = ms[1].trim(); $('search').value = query; renderGrids(); $('search').focus(); fb(s.searchAct + ': ' + ms[1]); return; }
    // play <name>
    var mp = tx.match(/(?:jugar|juega|juego|abrir|abre|pon|play|open|launch|start)\s+(.+)/);
    var name = mp ? mp[1] : tx;
    var gm = findGame(name);
    if (gm) { fb((s.play || 'Play') + ' ' + gm.name); goHome(); launch(gm); return; }
    fb((s.voiceHelp || "Try: 'play Snake'"));
  }

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

  // ---------- voice: mic button + gamepad shortcut ----------
  if (voiceSupported()) {
    $('micBtn').hidden = false;
    $('micBtn').addEventListener('click', startVoice);
  }
  window.__voice = handleVoice; // test hook (typed command path)

  // ---------- recenter the TV ----------
  function recenterTv() {
    tvX = 0; tvY = 0; applyTv();
    try { localStorage.setItem('consola.tvX', 0); localStorage.setItem('consola.tvY', 0); } catch (e) {}
    toast(t().placed || 'TV centered');
  }

  // ---------- AR lighting match: sample the camera frame and gently tint/expose
  //            the 3D pets (via tv3d) and the TV to match the real room ----------
  var ambient = { r: 1, g: 1, b: 1, lum: 0.6 };
  window.__CONSOLA_AMBIENT = function () { return ambient; };
  var sampleCv = null;
  function sampleAmbient() {
    if (!camOn || !video || video.readyState < 2) return;
    try {
      if (!sampleCv) { sampleCv = document.createElement('canvas'); sampleCv.width = 16; sampleCv.height = 16; }
      var cx = sampleCv.getContext('2d'); cx.drawImage(video, 0, 0, 16, 16);
      var d = cx.getImageData(0, 0, 16, 16).data, r = 0, g = 0, b = 0, n = d.length / 4;
      for (var i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2]; }
      r = r / n / 255; g = g / n / 255; b = b / n / 255;
      var lum = 0.299 * r + 0.587 * g + 0.114 * b;
      ambient.r += (r - ambient.r) * 0.35; ambient.g += (g - ambient.g) * 0.35;
      ambient.b += (b - ambient.b) * 0.35; ambient.lum += (lum - ambient.lum) * 0.35;
      // mild match on the CSS TV (keep the screen glow alive — gentle range)
      var bri = Math.max(0.9, Math.min(1.12, 0.92 + ambient.lum * 0.3));
      if (tvWrap) tvWrap.style.filter = 'brightness(' + bri.toFixed(3) + ')';
    } catch (e) {}
  }
  setInterval(sampleAmbient, 1100);

  // ---------- on-screen control cluster: do everything by tapping ----------
  function buildControls() {
    var fab = document.createElement('button');
    fab.id = 'controlsFab'; fab.className = 'controls-fab'; fab.type = 'button';
    fab.setAttribute('aria-label', 'Controles'); fab.title = 'Controles'; fab.textContent = '☰';
    var panel = document.createElement('div');
    panel.id = 'controlPanel'; panel.className = 'control-panel'; panel.hidden = true; panel.setAttribute('role', 'menu');
    document.body.appendChild(fab); document.body.appendChild(panel);
    var open = false;
    function closeP() { open = false; panel.hidden = true; fab.classList.remove('on'); }
    function toggle() { open = !open; if (open) { fill(); panel.hidden = false; fab.classList.add('on'); } else closeP(); }
    fab.addEventListener('click', toggle);
    document.addEventListener('click', function (e) { if (open && e.target !== fab && !panel.contains(e.target)) closeP(); }, true);
    window.__closeControls = closeP;
    function click(id) { var el = $(id); if (el) el.click(); }
    function item(icon, label, fn, keep) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'ctrl-btn'; b.title = label; b.setAttribute('role', 'menuitem');
      b.innerHTML = '<span class="ci" aria-hidden="true">' + icon + '</span><span class="cl">' + esc(label) + '</span>';
      b.addEventListener('click', function (ev) { ev.stopPropagation(); blip(560); fn(); if (!keep) closeP(); });
      panel.appendChild(b);
    }
    function fill() {
      var s = t(); panel.innerHTML = '';
      if (current) {
        item('⟵', s.home || 'Menu', function () { goHome(); });
        item('🎤', s.voice || 'Talk', function () { startVoice(); }, true);
        item('⛶', 'Pantalla', function () { click('fsBtn'); }, true);
      } else {
        item('◀', 'Anterior', function () { carMove(-1); }, true);
        item('▶', 'Siguiente', function () { carMove(1); }, true);
        item('▶️', s.play || 'Play', function () { carLaunch(); });
        item('🔍', s.searchAct || 'Search', function () { $('search').focus(); });
        item('⭐', s.favorite || 'Favorite', function () { toggleFav(); }, true);
        item('🎤', s.voice || 'Talk', function () { startVoice(); }, true);
        item('📷', s.cameraAct || 'Camera', function () { click('camBtn'); }, true);
        item('📍', s.moveTv || 'Place TV', function () { click('placeBtn'); });
        item('➖', 'Más pequeña', function () { click('sizeDown'); }, true);
        item('➕', 'Más grande', function () { click('sizeUp'); }, true);
        item('⟳', 'Centrar', function () { recenterTv(); }, true);
        item(bgMode === 'space' ? '🪟' : '🌌', bgMode === 'space' ? (s.bgRoom || 'Room') : (s.bgSpace || 'Space'), function () { click('bgBtn'); fill(); }, true);
        item(mode === 'pc' ? '🎮' : '⌨️', mode === 'pc' ? (s.modeConsole || 'Console') : (s.modePc || 'PC'), function () { click('modeBtn'); fill(); }, true);
        item('🔊', s.voiceOut || 'Voice', function () { click('ttsBtn'); });
        item('🌐', 'Idioma', function () { openPicker(); });
        item('👤', 'Perfil', function () { click('profileBtn'); });
        item('⛶', 'Pantalla', function () { click('fsBtn'); }, true);
      }
    }
  }

  // ---------- init ----------
  buildControls();
  setMode(savedMode() || 'console', false);
  applyTv();
  loadProfile();
  setTtsIcon();
  if (!synth) { var tb = $('ttsBtn'); if (tb) tb.hidden = true; } // no synthesis → hide the setting
  tickClock(); setInterval(tickClock, 15000);
  setupPets();
  applyLang();
  boot();
  checkOrient();
  if (!TEST) startCam(); else showRoom('');

  // First-run flow: language (handled in boot) → mode chooser → connect-pad prompt.
  if (!TEST) {
    setTimeout(function () {
      if (!savedMode()) showModeChooser();
      else maybeNoPad();
    }, firstRun ? 2600 : 2300);
  }

  // expose a tiny hook for tests
  window.__CONSOLA_READY__ = true;
})();
