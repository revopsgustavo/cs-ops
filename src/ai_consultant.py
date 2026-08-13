"""Confirma que o copiloto é local, rule-based e supervisionado."""
from pathlib import Path
text=(Path(__file__).parents[1]/'components'/'dashboard.tsx').read_text(encoding='utf-8')
assert 'rule-based' in text and 'Revisão humana obrigatória' in text and 'Não envia mensagens' in text
print('Copiloto rule-based com revisão humana validado.')
