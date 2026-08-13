from pathlib import Path

ROOT=Path(__file__).parents[1]

def test_required_files():
    for file in ('README.md','LICENSE','src/data.ts','src/rules.ts','components/dashboard.tsx'):
        assert (ROOT/file).exists()

def test_synthetic_disclosure():
    assert 'Todos os dados são sintéticos' in (ROOT/'README.md').read_text(encoding='utf-8')
