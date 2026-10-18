// KMM house ads: a small, closable card that promotes ANOTHER KMM game.
// No outside ad networks, no tracking. Include in a game with:
//   <script src="../promo.js" defer></script>   (or "./promo.js" on the dashboard)
// It appears a few seconds after the page loads, at most once every 90 s,
// and hides itself after 15 s. Games with a screenshot show it as a picture
// card. The page's own game id is detected from the URL so it never
// advertises itself. Works on phones (centered, full width).
(function () {
  var GAMES = [
    { id: 'dontlookback', name: "Don't Look Back", icon: '👻', img: 'dontlookback/shot1.jpg', text: { es: '4 pesadillas. 4 monstruos. No confíes en nadie.', en: '4 nightmares. 4 monsters. Trust no one.' }, color: '#b91c1c', cta: { es: 'Descargar', en: 'Download' } },
    { id: 'kmmcars', name: 'KMM Cars Models Drive', icon: '🏎️', img: 'kmmcars/shot1.jpg', text: { es: 'Coches realistas, volante y simulador', en: 'Realistic cars, wheel & motion sim' }, color: '#0ea5e9', cta: { es: 'Descargar', en: 'Download' } },
    { id: 'pvpkmm', name: 'PvP KMM', icon: '🔫', img: 'pvpkmm/shot1.jpg', text: { es: 'Salta del avión y sé el último en pie', en: 'Jump from the plane, be the last one standing' }, color: '#b45309' },
    { id: 'itneedstwo', name: 'It Needs Two KMM', icon: '🤝', img: 'itneedstwo/shot1.jpg', text: { es: 'Juego cooperativo para 2', en: 'Co-op game for 2 players' }, color: '#db2777' },
    { id: 'filmkmm', name: 'Films', icon: '🎬', img: 'filmkmm/shot1.jpg', text: { es: 'Crea tus películas en 3D', en: 'Make your own 3D movies' }, color: '#e50914' },
    { id: 'kamyspikes', name: 'Kamy Spikes', icon: '🔺', text: { es: '¡Salta los pinchos al ritmo!', en: 'Jump the spikes to the beat!' }, color: '#2563eb' },
    { id: 'cocina', name: 'Cocina del Mundo', icon: '🍲', text: { es: 'Recetas de todo el mundo con fotos', en: 'Recipes from around the world' }, color: '#e0562d' },
    { id: 'infinitecraft', name: 'Infinite Craft', icon: '✨', text: { es: 'Mezcla de todo, hasta lo imposible', en: 'Mix anything, even the impossible' }, color: '#7c3aed' },
    { id: 'craftkmm', name: 'Craft KMM', icon: '⛏️', text: { es: 'Construye un mundo infinito', en: 'Build an infinite world' }, color: '#15803d', url: 'https://kmaram16.github.io/craft-kmm/' }
  ];
  try {
    var KEY = 'kmm.promo.last';
    var now = Date.now();
    var last = 0;
    try { last = +(localStorage.getItem(KEY) || 0); } catch (e) {}
    if (now - last < 90 * 1000) return;
    if (new URLSearchParams(location.search).has('test')) return; // never during automated tests

    // Base folder of the arcade = folder that holds this script (works at any depth).
    var src = (document.currentScript && document.currentScript.src) || '';
    var base = src ? src.replace(/promo\.js(\?.*)?$/, '') : '../';

    var here = location.pathname.split('/').filter(Boolean).pop() || '';
    var pool = GAMES.filter(function (g) { return g.id !== here; });
    // Games with a picture are shown twice as often.
    var weighted = [];
    pool.forEach(function (g) { weighted.push(g); if (g.img) weighted.push(g); });
    var g = weighted[Math.floor(Math.random() * weighted.length)];

    var lang = 'es';
    try { lang = (localStorage.getItem('arcade.lang') || navigator.language || 'es').slice(0, 2); } catch (e) {}
    var es = lang === 'es';
    var text = g.text[lang] || (es ? g.text.es : g.text.en);
    var cta = g.cta ? (es ? g.cta.es : g.cta.en) : (es ? 'Jugar' : 'Play');
    var href = g.url || (base + g.id + '/');
    var small = window.matchMedia && window.matchMedia('(max-width: 600px)').matches;

    setTimeout(function () {
      try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
      var box = document.createElement('a');
      box.href = href;
      box.setAttribute('role', 'complementary');
      box.setAttribute('aria-label', g.name);
      box.style.cssText = 'position:fixed;z-index:2147483000;display:block;overflow:hidden;text-decoration:none;color:#fff;' +
        'border-radius:16px;background:#0b0f19;font:600 14px system-ui,-apple-system,Segoe UI,sans-serif;' +
        'box-shadow:0 12px 36px #000a,0 0 0 2px ' + g.color + ';transition:transform .45s cubic-bezier(.2,.9,.3,1.2),opacity .3s;' +
        (small ? 'left:12px;right:12px;bottom:12px;' : 'right:16px;bottom:16px;width:320px;') +
        'transform:translateY(150%);opacity:0;';

      if (g.img) {
        var pic = document.createElement('div');
        pic.style.cssText = 'height:' + (small ? 120 : 150) + 'px;background:#000 center/cover no-repeat url("' + base + g.img + '");position:relative';
        var shade = document.createElement('div');
        shade.style.cssText = 'position:absolute;inset:0;background:linear-gradient(transparent 40%,#0b0f19)';
        pic.appendChild(shade);
        box.appendChild(pic);
      }

      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:' + (g.img ? '4px' : '12px') + ' 14px 12px';
      var icon = document.createElement('div');
      icon.textContent = g.icon;
      icon.style.cssText = 'font-size:30px;line-height:1;flex:none';
      var body = document.createElement('div');
      body.style.cssText = 'flex:1;min-width:0';
      var title = document.createElement('div');
      title.textContent = g.name;
      title.style.cssText = 'font-size:16px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
      var sub = document.createElement('div');
      sub.textContent = text;
      sub.style.cssText = 'font-weight:500;opacity:.85;font-size:12.5px;margin-top:2px';
      var btn = document.createElement('span');
      btn.textContent = cta + ' ▶';
      btn.style.cssText = 'flex:none;background:' + g.color + ';border-radius:999px;padding:7px 14px;font-size:13px;font-weight:800';
      body.appendChild(title); body.appendChild(sub);
      row.appendChild(icon); row.appendChild(body); row.appendChild(btn);
      box.appendChild(row);

      var tag = document.createElement('span');
      tag.textContent = 'KMM';
      tag.style.cssText = 'position:absolute;top:8px;left:10px;font-size:10px;font-weight:800;letter-spacing:1px;background:#000a;border-radius:6px;padding:2px 6px';
      box.appendChild(tag);

      var x = document.createElement('button');
      x.type = 'button';
      x.textContent = '✕';
      x.setAttribute('aria-label', es ? 'Cerrar' : 'Close');
      x.style.cssText = 'position:absolute;top:6px;right:6px;width:30px;height:30px;border-radius:50%;background:#000b;border:0;color:#fff;font-size:15px;cursor:pointer';
      box.appendChild(x);

      document.body.appendChild(box);
      requestAnimationFrame(function () { requestAnimationFrame(function () { box.style.transform = 'translateY(0)'; box.style.opacity = '1'; }); });
      function hide() { box.style.transform = 'translateY(150%)'; box.style.opacity = '0'; setTimeout(function () { box.remove(); }, 500); }
      x.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); hide(); });
      setTimeout(hide, 15000);
    }, 4000);
  } catch (e) { /* never break the game */ }
})();
