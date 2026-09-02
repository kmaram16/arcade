import { chromium } from 'playwright';
const b = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport:{width:1280,height:800} })).newPage();
await p.goto('http://localhost:5323/netflix/');
await p.waitForTimeout(800);
await p.getByText('Para toda la familia').scrollIntoViewIfNeeded();
const poster = p.locator('[class*=poster]').filter({ hasText: 'Policán' }).first();
console.log('posters Policán:', await p.locator('[class*=poster]').filter({ hasText: 'Policán' }).count());
await poster.click({ force: true });
await p.waitForTimeout(900);
const btns = await p.locator('button:visible').evaluateAll(els =>
  els.map(e => `${e.className} | ${(e.title||'')} | ${e.innerText.slice(0,18).replace(/\n/g,' ')}`)
);
console.log('botones visibles tras clic:\n' + btns.join('\n'));
await b.close();
