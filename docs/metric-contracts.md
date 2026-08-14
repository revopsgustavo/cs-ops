# Contratos das métricas

Data-base do dataset: **13/08/2026**. Todos os valores são sintéticos e determinísticos.

| Métrica | Definição | Valor reconciliado | Uso decisório |
|---|---|---:|---|
| MRR monitorado | Soma do MRR das 36 contas | R$ 393.570 | Dimensionar a carteira |
| ARR | MRR × 12 por conta | R$ 4.722.840 | Comparabilidade anual |
| MRR em risco | Soma do MRR com Health < 60 | R$ 100.598 | Exposição para priorização |
| GRR | (base − churn − contração) ÷ base | 97,19% | Retenção sem expansão |
| NRR | (base − churn − contração + expansão + reativação) ÷ base | 98,87% | Evolução líquida da base |
| Logo churn | Contas com churn ÷ contas iniciais | 8,33% | Perda de logos |
| Revenue churn | MRR churn ÷ MRR inicial | 1,92% | Intensidade financeira do churn |
| Potencial elegível | Soma do potencial após todos os gates | R$ 8.749 | Hipótese para validação comercial |
| Health médio | Média simples dos scores | 63,97 | Tendência agregada, não prioridade |
| Próxima ação completa | Contas com ação ÷ total | 88,89% | Cobertura operacional |

## Invariantes

- `ARR = MRR × 12` em todas as contas.
- `GRR ≤ 100%`.
- Potencial de expansão nunca compõe NRR.
- Dado ausente não é convertido silenciosamente em zero.
- As faixas usam limites exatos: 0–39, 40–59, 60–79 e 80–100.
- Cards, tabelas, filtros e testes consomem a mesma camada de dados e regras.

Os valores acima são oráculos explícitos em `tests/metrics.test.ts`: uma alteração de dataset ou regra exige reconciliação consciente, em vez de atualizar números silenciosamente.
