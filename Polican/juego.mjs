import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const c = await b.newContext({ viewport:{width:390,height:844}, hasTouch:true, isMobile:true, deviceScaleFactor:2 });
const p = await c.newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));
p.on('console', m => { if (m.type()==='error') errs.push('console: '+m.text()); });

await p.goto('http://localhost:5312/');
await p.waitForTimeout(600);

// Menú -> empezar
await p.getByPlaceholder('Añade un nombre').fill('Kamyar');
await p.getByRole('button', { name: '+ Añadir' }).click();
await p.getByRole('button', { name: /Empezar la persecución/ }).click();
await p.waitForTimeout(2500);

const canvas = await p.locator('canvas').boundingBox();
console.log('canvas 3D:', canvas ? `${canvas.width.toFixed(0)}x${canvas.height.toFixed(0)}` : 'NO HAY');

// ¿WebGL pinta algo? Muestreamos píxeles del canvas.
const pix = await p.evaluate(() => {
  const c = document.querySelector('canvas');
  const gl = c.getContext('webgl2') || c.getContext('webgl');
  if (!gl) return { ok:false, reason:'sin contexto webgl' };
  const px = new Uint8Array(4 * 60 * 60);
  gl.readPixels(Math.floor(c.width/2)-30, Math.floor(c.height/2)-30, 60, 60, gl.RGBA, gl.UNSIGNED_BYTE, px);
  const colors = new Set();
  for (let i=0;i<px.length;i+=4) colors.add(px[i]+','+px[i+1]+','+px[i+2]);
  return { ok:true, distintos: colors.size };
});
console.log('webgl:', JSON.stringify(pix));

const txt = () => p.locator('body').innerText();
const t0 = await txt();
console.log('HUD distancia:', /Distancia/.test(t0), '| medidor Pedrito:', /a \d+\.\d m/.test(t0));
const d0 = parseInt((t0.match(/(\d+) m/)||[])[1] || '0');
await p.waitForTimeout(2500);
const t1 = await txt();
const d1 = parseInt((t1.match(/(\d+) m/)||[])[1] || '0');
console.log('distancia avanza:', d0, '->', d1, d1 > d0 ? 'OK' : 'FALLO');

await p.screenshot({ path: 'shot-3p.png' });

// Cambiar a 1ª persona
await p.getByRole('button', { name: /3ª persona/ }).click();
await p.waitForTimeout(1200);
await p.screenshot({ path: 'shot-1p.png' });
p.setViewportSize({width:390,height:844});
console.log('botón cámara ahora:', (await txt()).includes('1ª persona') ? '1ª persona OK' : 'no cambió');

// Controles táctiles: swipe
await p.touchscreen.tap(200, 500);
await p.waitForTimeout(800);

// Pad
const pad = await p.getByRole('button', { name: 'Izquierda' }).boundingBox();
console.log('pad en pantalla:', pad && pad.y + pad.height <= 844 ? 'SÍ' : 'NO (fuera de la vista)');

console.log('scroll de página:', await p.evaluate(()=>window.scrollY), '(debe ser 0)');
console.log('errores:', errs.length ? errs.slice(0,4) : 'ninguno');
await b.close();
