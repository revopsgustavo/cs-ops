"""Confirma a cobertura das áreas do produto."""
from pathlib import Path
text=(Path(__file__).parents[1]/'components'/'dashboard.tsx').read_text(encoding='utf-8')
areas=['Cockpit','Customer 360','Health Score','Revenue Risk','Expansão','Automações','AI Copilot','Governança','Playbooks','Plano 90 dias']
missing=[x for x in areas if x not in text]
assert not missing, missing
print(f'{len(areas)} áreas funcionais auditadas.')
