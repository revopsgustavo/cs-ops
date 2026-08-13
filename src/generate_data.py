"""Valida a camada sintética mantida em src/data.ts."""
from pathlib import Path
text=(Path(__file__).parent/'data.ts').read_text(encoding='utf-8')
assert 'names=[' in text and 'mrr*12' in text and "AS_OF_DATE='2026-08-13'" in text
assert 'Date.now' not in text
print('Camada sintética determinística e regra MRR/ARR presentes.')
