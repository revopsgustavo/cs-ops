"""Confirma a cobertura das áreas do produto."""
from pathlib import Path
text=(Path(__file__).parents[1]/'components'/'dashboard.tsx').read_text(encoding='utf-8')
areas=['Painel Executivo','Visão 360 do Cliente','Índice de Saúde','Risco de Receita','Expansão','Automações','Copiloto de IA','Governança','Guias Operacionais','Plano de 90 dias']
missing=[x for x in areas if x not in text]
assert not missing, missing
print(f'{len(areas)} áreas funcionais auditadas.')
