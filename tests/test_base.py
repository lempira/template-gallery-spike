import pytest

def test_addition():
    assert 2 + 2 == 4
    assert 0 + 0 == 0
    assert -1 + 1 == 0

def test_multiplication():
    assert 3 * 3 == 9
    assert 0 * 5 == 0
    assert -2 * 3 == -6

def test_division():
    assert 8 / 2 == 4
    assert 10 / 2 == 5
    with pytest.raises(ZeroDivisionError):
        1 / 0

def test_subtraction():
    assert 5 - 3 == 2
    assert 1 - 1 == 0
    assert -1 - (-1) == 0 