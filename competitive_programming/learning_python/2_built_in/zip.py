# zip() glues together two things taking one element form eact at time.
l = list(zip(['h', 'e', 'l', 'l', 'o'], [1, 2, 3, 4, 5]))
print(l)
l = list(zip('hello', range(1, 6))) # equivalent, more Pythonic
print(l)