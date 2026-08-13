import AxeBuilder from '@axe-core/playwright';import {expect,test} from '@playwright/test';
const routes=['/','/customer-360','/health-score','/revenue-risk','/expansao','/automacoes','/ai-copilot','/governanca','/playbooks','/plano-90-dias'];
for(const route of routes)test(`sem violações axe críticas ou sérias: ${route}`,async({page})=>{await page.goto(route);const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(results.violations.filter(v=>v.impact==='critical'||v.impact==='serious')).toEqual([])});
