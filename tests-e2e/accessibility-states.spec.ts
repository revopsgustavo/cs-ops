import AxeBuilder from '@axe-core/playwright';import {expect,test} from '@playwright/test';
async function assertAxe(page:import('@playwright/test').Page){const r=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(r.violations.filter(v=>v.impact==='critical'||v.impact==='serious')).toEqual([])}
test('modal aberto e filtros aplicados',async({page})=>{await page.goto('/customer-360');await page.getByLabel('Risco').selectOption('Crítico');await assertAxe(page);await page.getByRole('button',{name:/Abrir diagnóstico/}).first().click();await assertAxe(page)});
test('menu mobile aberto',async({page},testInfo)=>{test.skip(testInfo.project.name!=='mobile');await page.goto('/');await page.getByRole('button',{name:'Abrir menu'}).click();await assertAxe(page)});
