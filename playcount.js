// KMM play counter — counts how many times each arcade game is opened, with NO
// account and NO backend. It uses the same free public MQTT broker the arcade
// already uses (presence + Ideas KMM), with RETAINED messages so the running
// total survives and is handed to anyone who connects:
//
//   kmm-arcade/plays/v1/<gameId>   -> a number, the total times that game loaded
//
// On a game page load we read the retained count and publish count+1 (retained).
// Privacy: it only ever stores a NUMBER. No name, no id of a person, no "who".
//
// Include it in a game the same way as promo.js:
//   <script src="../playcount.js" defer></script>   (or "./playcount.js" on the dashboard)
//
// It skips test/automation and embeds (?test, ?noad, ?embed, inside an iframe)
// and de-dupes with sessionStorage so a refresh in the same tab doesn't spam.
(function () {
  try {
    // Never count automation, embeds (e.g. inside Nebula Console) or the preview.
    try { if (window.top !== window.self) return; } catch (e) { return; }
    var qp = new URLSearchParams(location.search);
    if (qp.has('test') || qp.has('noad') || qp.has('embed')) return;

    // The game id = the folder this page lives in, e.g. /arcade/snake/ -> "snake".
    // The dashboard home (/arcade/ or /) counts under "home".
    var parts = location.pathname.split('/').filter(Boolean);
    var last = parts[parts.length - 1] || '';
    var id = last && last.indexOf('.') === -1 ? last : (parts[parts.length - 2] || '');
    if (id === 'arcade' || id === '' || id === 'arcade-play') id = 'home';
    if (id === 'stats') return; // viewing the stats page is not "a play"
    id = id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40);
    if (!id) return;

    // De-dupe: once per tab-session, and at most once per 30 min for this game.
    var sk = 'kmm.play.' + id;
    try {
      var prev = +(sessionStorage.getItem(sk) || 0);
      if (prev && Date.now() - prev < 30 * 60 * 1000) return;
      sessionStorage.setItem(sk, String(Date.now()));
    } catch (e) { /* private mode: just continue */ }

    var BROKER = 'wss://broker.emqx.io:8084/mqtt';
    var TOPIC = 'kmm-arcade/plays/v1/' + id;

    function bump(mqtt) {
      var client;
      try {
        client = mqtt.connect(BROKER, {
          clientId: 'kmm-pc-' + Math.random().toString(36).slice(2, 10),
          keepalive: 20, reconnectPeriod: 0, connectTimeout: 8000, clean: true
        });
      } catch (e) { return; }
      var current = 0, done = false;
      function finish() {
        if (done) return; done = true;
        var next = current + 1;
        try {
          client.publish(TOPIC, String(next), { qos: 1, retain: true }, function () {
            setTimeout(function () { try { client.end(true); } catch (e) {} }, 400);
          });
        } catch (e) { try { client.end(true); } catch (e2) {} }
      }
      client.on('connect', function () {
        try { client.subscribe(TOPIC, { qos: 0 }); } catch (e) {}
        // Give the retained value a moment to arrive, then increment.
        setTimeout(finish, 1300);
      });
      client.on('message', function (t, payload) {
        if (t !== TOPIC) return;
        var n = parseInt(new TextDecoder().decode(payload), 10);
        if (!isNaN(n) && n > current) current = n;
      });
      client.on('error', function () { try { client.end(true); } catch (e) {} });
      // Safety: never hang around.
      setTimeout(function () { try { client.end(true); } catch (e) {} }, 12000);
    }

    // Load mqtt.js from a CDN once; if it can't load, we silently skip (the game
    // must never break because the counter is offline).
    if (window.mqtt) { bump(window.mqtt); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/mqtt@5.15.2/dist/mqtt.min.js';
    s.async = true;
    s.onload = function () { if (window.mqtt) bump(window.mqtt); };
    s.onerror = function () { /* offline — skip quietly */ };
    document.head.appendChild(s);
  } catch (e) { /* never break the game */ }
})();
