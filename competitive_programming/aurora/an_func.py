# Función anónima

def sumAn(a, b):
    return a + b


def operation():
    """Imprime el resultado de una operación ."""

a = sumAn

"""[sumAn]"""


def generate(n=10):
    for i in range(1, n + 1):
        yield i


def f1(n=100_000_000):
    for i in range(1, n+1):
        # print(i)
        pass
# ()
# merge(1000)
def f2(n, i):
    # space O(n)
    print(i)
    if i == n:
        return
    f2(n, i + 1)

from time import time as timeF
t1 = timeF()
f2(10, 1)
print(timeF() - t1)
