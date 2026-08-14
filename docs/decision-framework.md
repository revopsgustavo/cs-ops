# Framework de decisão

Este documento registra como o case converte sinais sintéticos em decisões operacionais. Ele existe para tornar premissas, limites e trade-offs auditáveis — não para apresentar correlação como causalidade.

## Da observação à ação

| Camada | Pergunta | Saída | Guardrail |
|---|---|---|---|
| Sinal | O que foi observado? | Uso, adoção, suporte, relacionamento, contrato e percepção | Ausência não vira zero |
| Saúde | Qual é a condição agregada? | Score de 0 a 100 e faixa de risco | Pesos são hipóteses não calibradas |
| Confiança | A evidência permite decidir? | Grau demonstrativo de confiabilidade | Saúde e confiança são independentes |
| Exposição | Qual receita está associada ao risco? | MRR abaixo de Health 60 | Exposição não é perda realizada |
| Prioridade | Onde agir primeiro? | Fila por risco, renovação, valor, tendência, sponsor e cobertura | Score ordena; não automatiza decisão |
| Ação | Quem faz o quê e quando? | Recomendação, owner e SLA | Validação humana obrigatória |
| Resultado | Como saber se funcionou? | Indicador operacional ou financeiro | Potencial não é receita realizada |

## Política de risco

Uma conta entra no MRR em risco quando `Health < 60`. O indicador foi escolhido como medida simples de exposição para o protótipo. Ele não estima probabilidade de churn. A priorização adiciona proximidade da renovação, MRR, deterioração da adoção, ausência de decisor e falta de próxima ação para evitar que o score agregado seja o único critério.

## Política de expansão

Expansão é um gate conservador, não um ranking comercial. A conta precisa atender simultaneamente a saúde mínima, confiança mínima, satisfação, pressão de uso, sponsor, suporte seguro e ausência de oportunidade em andamento. Uma renovação próxima também bloqueia casos limítrofes. `expansionPotential` representa tamanho indicativo; não representa probabilidade, pipeline nem NRR.

## Falsos positivos e falsos negativos

- Falso positivo: score saudável pode esconder ticket crítico ou sponsor ausente. Os gates de expansão analisam esses sinais separadamente.
- Falso negativo: score baixo pode refletir informação ausente ou desatualizada. A confiança deve orientar validação antes de ação intensiva.
- Sinal contraditório: alta adoção com suporte crítico não é “resolvido” por média. O diagnóstico preserva os componentes e exige revisão.

## Critério para produção

Antes de uso real seriam necessários contratos de dados, política temporal, backtesting por coorte, calibração de pesos, análise de estabilidade, definição de custo dos erros, monitoramento de drift e validação com CSMs e lideranças de receita. Machine learning só seria considerado depois de baseline rule-based, volume histórico e objetivo mensurável.
