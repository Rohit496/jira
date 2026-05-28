import importlib
import pytest

MODULES = ['employee']

@pytest.mark.parametrize('mod', MODULES)
def test_module_imports(mod):
    try:
        m = importlib.import_module(mod)
    except ImportError as e:
        msg = str(e)
        if any(s in msg for s in (
            'email-validator', 'pydantic[email]', 'No module named',
        )):
            pytest.skip(f'optional dep missing: {msg}')
        raise
    assert m is not None
