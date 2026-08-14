"""Auditoria estática dos gaps de RevOps e CS Ops documentados."""
from pathlib import Path
text=(Path(__file__).parents[1]/'components'/'dashboard.tsx').read_text(encoding='utf-8')
for term in ('Hipótese analítica','Recomendação','MRR em risco','patrocinador executivo'):
    assert term in text, f'Gap sem evidência: {term}'
print('Gaps, hipóteses e recomendações estão explicitados na interface.')
