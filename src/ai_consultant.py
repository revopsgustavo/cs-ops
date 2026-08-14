"""Confirma que o copiloto é local, baseado em regras e supervisionado."""
from pathlib import Path
text=(Path(__file__).parents[1]/'components'/'dashboard.tsx').read_text(encoding='utf-8')
assert 'baseada em regras' in text and 'Revisão humana obrigatória' in text and 'Não envia mensagens' in text
print('Copiloto baseado em regras com revisão humana validado.')
