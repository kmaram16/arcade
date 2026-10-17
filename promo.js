// KMM house ads: a small, closable card that promotes ANOTHER KMM game.
// No outside ad networks, no tracking. Include in a game with:
//   <script src="../promo.js" defer></script>
// It appears a few seconds after the page loads, at most once every 3 minutes,
// and hides itself after 12 s. The game's own id is detected from the URL so it
// never advertises itself.
(function () {
  var GAMES = [
    { id: 'kamyspikes', name: 'Kamy Spikes', icon: '🔺', text: { es: '¡Salta los pinchos al ritmo!', en: 'Jump the spikes to the beat!' }, color: '#2563eb' },
    { id: 'pvpkmm', name: 'PvP KMM', icon: '🔫', text: { es: 'Salta del avión y sé el último en pie', en: 'Jump from the plane, be the last one standing' }, color: '#b45309' },
    { id: 'cocina', name: 'Cocina del Mundo', icon: '🍲', text: { es: 'Recetas de todo el mundo con fotos', en: 'Recipes from around the world' }, color: '#e0562d' },
    { id: 'filmkmm', name: 'Films', icon: '🎬', text: { es: 'Crea tus películas en 3D', en: 'Make your own 3D movies' }, color: '#e50914' },
    { id: 'itneedstwo', name: 'It Needs Two KMM', icon: '🤝', text: { es: 'Juego cooperativo para 2', en: 'Co-op game for 2 players' }, color: '#db2777' },
    { id: 'infinitecraft', name: 'Infinite Craft', icon: '✨', text: { es: 'Mezcla de todo, hasta lo imposible', en: 'Mix anything, even the impossible' }, color: '#7c3aed' },
    { id: 'craftkmm', name: 'Craft KMM', icon: '⛏️', text: { es: 'Construye un mundo infinito', en: 'Build an infinite world' }, color: '#15803d', url: 'https://kmaram16.github.io/craft-kmm/' },
    { id: 'dontlookback', name: "Don't Look Back", icon: '👁️', text: { es: 'Terror: 4 monstruos. No confíes en nadie', en: 'Horror: 4 monsters. Trust no one' }, color: '#991b1b' }
  ];
  try {
    var KEY = 'kmm.promo.last';
    var now = Date.now();
    var last = +(localStorage.getItem(KEY) || 0);
    if (now - last < 3 * 60 * 1000) return;
    if (new URLSearchParams(location.search).has('test')) return; // never during automated tests
    var here = location.pathname.split('/').filter(Boolean).pop() || '';
    var pool = GAMES.filter(function (g) { return g.id !== here; });
    var g = pool[Math.floor(Math.random() * pool.length)];
    var lang = (localStorage.getItem('arcade.lang') || navigator.language || 'es').slice(0, 2);
    var text = g.text[lang] || (lang === 'es' ? g.text.es : g.text.en);
    var cta = lang === 'es' ? 'Jugar' : 'Play';
    var href = g.url || ('../' + g.id + '/');

    setTimeout(function () {
      localStorage.setItem(KEY, String(Date.now()));
      var box = document.createElement('div');
      box.setAttribute('role', 'complementary');
      box.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:2147483000;max-width:290px;display:flex;align-items:center;gap:10px;' +
        'padding:10px 34px 10px 12px;border-radius:14px;background:#111827ee;color:#fff;font:600 14px system-ui,sans-serif;' +
        'box-shadow:0 10px 30px #0008;border:2px solid ' + g.color + ';transform:translateY(140%);transition:transform .35s ease;';
      var icon = document.createElement('div');
      icon.textContent = g.icon;
      icon.style.cssText = 'font-size:30px;line-height:1';
      var body = document.createElement('div');
      var title = document.createElement('div');
      title.textContent = g.name;
      title.style.cssText = 'font-size:15px;font-weight:800';
      var sub = document.createElement('div');
      sub.textContent = text;
      sub.style.cssText = 'font-weight:500;opacity:.85;font-size:12.5px;margin:2px 0 6px';
      var a = document.createElement('a');
      a.href = href;
      a.textContent = cta + ' ▶';
      a.style.cssText = 'display:inline-block;background:' + g.color + ';color:#fff;text-decoration:none;border-radius:999px;padding:4px 12px;font-size:12.5px';
      var tag = document.createElement('span');
      tag.textContent = 'KMM';
      tag.style.cssText = 'margin-left:8px;font-size:10px;opacity:.6';
      var x = document.createElement('button');
      x.textContent = '✕';
      x.setAttribute('aria-label', 'Cerrar');
      x.style.cssText = 'position:absolute;top:6px;right:8px;background:none;border:0;color:#fff;font-size:15px;cursor:pointer;opacity:.7';
      body.appendChild(title); body.appendChild(sub); body.appendChild(a); body.appendChild(tag);
      box.appendChild(icon); box.appendChild(body); box.appendChild(x);
      document.body.appendChild(box);
      requestAnimationFrame(function () { box.style.transform = 'translateY(0)'; });
      function hide() { box.style.transform = 'translateY(140%)'; setTimeout(function () { box.remove(); }, 400); }
      x.addEventListener('click', hide);
      setTimeout(hide, 12000);
    }, 6000);
  } catch (e) { /* never break the game */ }
})();
