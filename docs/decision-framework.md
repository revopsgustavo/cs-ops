# Estrutura de decisão

Este documento registra como o estudo de caso converte sinais sintéticos em decisões operacionais. Ele existe para tornar premissas, limites e escolhas auditáveis — não para apresentar correlação como causalidade.

## Da observação à ação

| Camada | Pergunta | Saída | Salvaguarda |
|---|---|---|---|
| Sinal | O que foi observado? | Uso, adoção, suporte, relacionamento, contrato e percepção | Ausência não vira zero |
| Saúde | Qual é a condição agregada? | Pontuação de 0 a 100 e faixa de risco | Pesos são hipóteses não calibradas |
| Confiança | A evidência permite decidir? | Grau demonstrativo de confiabilidade | Saúde e confiança são independentes |
| Exposição | Qual receita está associada ao risco? | MRR com Índice de Saúde abaixo de 60 | Exposição não é perda realizada |
| Prioridade | Onde agir primeiro? | Fila por risco, renovação, valor, tendência, patrocinador executivo e cobertura | A pontuação ordena; não automatiza a decisão |
| Ação | Quem faz o quê e quando? | Recomendação, responsável e SLA | Validação humana obrigatória |
| Resultado | Como saber se funcionou? | Indicador operacional ou financeiro | Potencial não é receita realizada |

## Política de risco

Uma conta entra no MRR em risco quando o `Índice de Saúde < 60`. O indicador foi escolhido como medida simples de exposição para o protótipo. Ele não estima probabilidade de cancelamento. A priorização adiciona proximidade da renovação, MRR, deterioração da adoção, ausência de decisor e falta de próxima ação para evitar que o índice agregado seja o único critério.

## Política de expansão

Expansão é um portão conservador, não uma classificação comercial. A conta precisa atender simultaneamente a saúde mínima, confiança mínima, satisfação, pressão de uso, patrocinador executivo, suporte seguro e ausência de oportunidade em andamento. Uma renovação próxima também bloqueia casos limítrofes. `expansionPotential` representa tamanho indicativo; não representa probabilidade, funil nem NRR.

## Falsos positivos e falsos negativos

- Falso positivo: índice saudável pode esconder chamado crítico ou patrocinador executivo ausente. Os portões de expansão analisam esses sinais separadamente.
- Falso negativo: índice baixo pode refletir informação ausente ou desatualizada. A confiança deve orientar validação antes de ação intensiva.
- Sinal contraditório: alta adoção com suporte crítico não é “resolvido” por média. O diagnóstico preserva os componentes e exige revisão.

## Critério para produção

Antes de uso real seriam necessários contratos de dados, política temporal, testes retrospectivos por coorte, calibração de pesos, análise de estabilidade, definição do custo dos erros, monitoramento de desvio e validação com CSMs e lideranças de receita. Aprendizado de máquina só seria considerado depois de uma linha de base baseada em regras, volume histórico e objetivo mensurável.
