# Lighthouse — execução local

Data-base da auditoria: 13/08/2026.

## Escopo configurado

- Executive Cockpit (`/`)
- Customer 360 (`/customer-360`)
- Health Score (`/health-score`)
- 1 execução por URL
- gates: performance ≥ 0,90; acessibilidade e boas práticas ≥ 0,95; SEO ≥ 0,90

## Resultado desta estação

O servidor do export estático respondeu HTTP 200 em `http://127.0.0.1:3100/` e o healthcheck do LHCI passou. Com o Chromium local, a navegação, coleta e auditorias da página inicial foram concluídas. O processo falhou durante a limpeza do perfil temporário (`EPERM`) antes de persistir o relatório; por isso, não há conjunto completo de scores publicável.

Erro reproduzido pelo `pnpm lighthouse`/LHCI:

```text
EPERM, Permission denied: ...\AppData\Local\Temp\lighthouse.<id>
```

Assim, nenhum número de Lighthouse é publicado como evidência. Acessibilidade é coberta separadamente por Playwright + axe em rotas e estados interativos. Para reproduzir em uma máquina sem essa política de processo, execute `pnpm build`, sirva `out/` na porta 3100 e rode `pnpm lighthouse`.
