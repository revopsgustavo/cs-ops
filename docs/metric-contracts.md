# Contratos das métricas

Data-base do conjunto de dados: **13/08/2026**. Todos os valores são sintéticos e determinísticos.

| Métrica | Definição | Valor reconciliado | Uso decisório |
|---|---|---:|---|
| MRR monitorado | Soma do MRR das 36 contas | R$ 393.570 | Dimensionar a carteira |
| ARR | MRR × 12 por conta | R$ 4.722.840 | Comparabilidade anual |
| MRR em risco | Soma do MRR com Índice de Saúde < 60 | R$ 100.598 | Exposição para priorização |
| GRR | (base − cancelamento − contração) ÷ base | 97,19% | Retenção sem expansão |
| NRR | (base − cancelamento − contração + expansão + reativação) ÷ base | 98,87% | Evolução líquida da base |
| Cancelamento de contas | Contas canceladas ÷ contas iniciais | 8,33% | Perda de clientes |
| Cancelamento de receita | MRR cancelado ÷ MRR inicial | 1,92% | Intensidade financeira do cancelamento |
| Potencial elegível | Soma do potencial após todos os portões | R$ 8.749 | Hipótese para validação comercial |
| Saúde média | Média simples dos índices | 63,97 | Tendência agregada, não prioridade |
| Próxima ação completa | Contas com ação ÷ total | 88,89% | Cobertura operacional |

## Invariantes

- `ARR = MRR × 12` em todas as contas.
- `GRR ≤ 100%`.
- Potencial de expansão nunca compõe NRR.
- Dado ausente não é convertido silenciosamente em zero.
- As faixas usam limites exatos: 0–39, 40–59, 60–79 e 80–100.
- Cartões, tabelas, filtros e testes consomem a mesma camada de dados e regras.

Os valores acima são referências explícitas em `tests/metrics.test.ts`: uma alteração do conjunto de dados ou da regra exige reconciliação consciente, em vez de atualizar números silenciosamente.
