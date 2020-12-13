"""map(function, iterable, ...) returns an iterator that applies function to 
every item of iterable, yielding the results. If additional iterable arguments
are passed, function must take that many arguments and is applied to the items
from all iterables in parellel. With multiple iterables, the iterator stops when
the shortest iterables is exhausted.
"""

l = map(lambda *a: a, range(3)) # 1 iterable
l = list(l)
print(l)

l = map(lambda *a: a, range(3), 'abc') # 2 iterables
l = list(l)
print(l)

l = map(lambda *a: a, range(3), 'abc', range(4, 7)) # 3 iterables
l = list(l)
print(l)

# map stops at the shortest iterator
l = map(lambda *a: a, (), 'abc') # empty tuple is the shortest
l = list(l)
print(l)

# (1, 2) shortest
l = map(lambda *a: a, (1, 2), 'abc')
l = list(l)
print(l)

# 'abc' shortest
l = map(lambda *a: a, (1, 2, 3, 4), 'abc') # 'abc' shortest
l = list(l)
print(l)