"""filter(function, iterable) construct an iterator from those elements of
iterable for which function returns True. iterable may be either a sequence, 
a container which supports iteration, or an iterator. If function is None, the 
identity function is assumed, that is, all elements of iterable that are false
are removed.
"""
test = [2, 5, 8, 0, 0, 1, 0]
l = filter(None, test)
l = list(l)
print(l)

# equivalent to the previous one
l = filter(lambda x: x, test)
l = list(l)
print(l)

l = filter(lambda x: x > 4, test)
l = list(l)
print(l)