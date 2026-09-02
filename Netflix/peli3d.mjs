import { chromium } from 'playwright';
const b = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const c = await b.newContext({ viewport:{width:1280,height:800} });
const p = await c.newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));
p.on('console', m => { if (m.type()==='error') errs.push('console: '+m.text()); });

await p.goto('http://localhost:5323/netflix/');
await p.waitForTimeout(800);

// Abrir Policán desde su fila
await p.getByText('Para toda la familia').scrollIntoViewIfNeeded();
await p.locator('[class*=poster]').filter({ hasText: 'Policán' }).first().click({ force: true });
await p.waitForTimeout(500);
await p.waitForTimeout(900);
await p.screenshot({ path: 'p-ficha.png' });

// Play
const play = p.locator(".sheet, .detail, [class*=sheet]").locator("button").filter({ hasText: /Reproducir|▶/ }).first();
await play.click({ force: true });
await p.waitForTimeout(2500);

const hasCanvas = await p.locator('canvas.stage3d').count();
const box = await p.locator('canvas.stage3d').boundingBox().catch(()=>null);
console.log('canvas 3D en el reproductor:', hasCanvas > 0, box ? `${box.width.toFixed(0)}x${box.height.toFixed(0)}` : '');
await p.screenshot({ path: 'p-3p.png' });

const t = await p.locator('body').innerText();
console.log('subtítulo visible:', /Narrador|Policán|Pedrito|Jefe/.test(t));
console.log('capítulo visible :', /Cap \d+\/32/.test(t));
console.log('reloj            :', (t.match(/\d:\d\d:\d\d/g)||[]).slice(0,2).join(' / '));

// 1ª persona
await p.getByRole('button', { name: /3ª persona/ }).click();
await p.waitForTimeout(1500);
await p.screenshot({ path: 'p-1p.png' });
console.log('cámara cambia    :', (await p.locator('body').innerText()).includes('1ª persona'));

// Avanzar a x10 para ver otra escena con otro hablante
const x10 = p.getByRole('button', { name: 'x10' }).first();
if (await x10.count()) await x10.click();
await p.waitForTimeout(3000);
console.log('errores:', errs.length ? errs.slice(0,3) : 'ninguno');
await b.close();
