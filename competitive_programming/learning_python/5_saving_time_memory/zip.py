"""zip(*iterables) returns an iterator of tuples, where the i-th tuple contains
the i-th elememt from each of the argument sequences of iterables. The iterator
stops when the shortest input iterable is exhausted. With a single iterable
argument, it returns an iterator of 1-tuples. With no arguments, it returns an
empty iterator.
"""
grades = [18, 23, 30, 27]
avgs = [22, 21, 29, 24]
l = zip(grades, avgs)
l = list(l)
print(l)

# equivalent to zip
l = map(lambda *a: a, avgs, grades)
l = list(l)
print(l)

# calculate the element-wise maximum amongst sequences, that is, the maximum of
# the first element of each sequence, then maximum of the second one, and so on
a = [5, 9, 2, 4, 7]
b = [3, 7, 1, 9, 2]
c = [6, 8, 0, 5, 3]

maxis = map(lambda t: max(t), zip(a, b, c))
maxis = list(maxis)
print(maxis)