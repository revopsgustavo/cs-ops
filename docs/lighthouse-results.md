# Lighthouse — execução local

Data-base da auditoria: 13/08/2026.

## Escopo configurado

- Painel Executivo (`/`)
- Visão 360 do Cliente (`/customer-360`)
- Índice de Saúde (`/health-score`)
- 1 execução por URL
- portões: desempenho ≥ 0,90; acessibilidade e boas práticas ≥ 0,95; otimização para busca ≥ 0,90

## Resultado desta estação

O servidor da exportação estática respondeu HTTP 200 em `http://127.0.0.1:3100/` e a verificação de integridade do LHCI passou. Com o Chromium local, a navegação, a coleta e as auditorias da página inicial foram concluídas. O processo falhou durante a limpeza do perfil temporário (`EPERM`) antes de persistir o relatório; por isso, não há conjunto completo de pontuações publicável.

Erro reproduzido pelo `pnpm lighthouse`/LHCI:

```text
EPERM, Permission denied: ...\AppData\Local\Temp\lighthouse.<id>
```

Assim, nenhum número de Lighthouse é publicado como evidência. Acessibilidade é coberta separadamente por Playwright + axe em rotas e estados interativos. Para reproduzir em uma máquina sem essa política de processo, execute `pnpm build`, sirva `out/` na porta 3100 e rode `pnpm lighthouse`.
