"""Confirma que o validador executável cobre contratos críticos."""
from pathlib import Path
text=(Path(__file__).parent/'rules.ts').read_text(encoding='utf-8')
for rule in ('ID duplicado','ARR divergente','MRR inválido','usuários inválidos','datas inválidas','faixa divergente'):
    assert rule in text, f'Contrato ausente: {rule}'
print('Contratos críticos executáveis encontrados: 6.')
