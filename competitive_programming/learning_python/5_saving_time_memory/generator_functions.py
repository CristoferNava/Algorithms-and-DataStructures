from typing import List

def get_squares(n: int) -> List[int]: # classic function approach
    return [x ** 2 for x in range(n)]
print(get_squares(10))

def get_squares_gen(n: int) -> List[int]:
    for x in range(n):
        yield x ** 2 # we yield, we don't return
print(list(get_squares_gen(10)))

"""get_squares(int) is classic function that collects all the squares of numbers
in [0, n) in a list, and returns it.

get_squares_gen(int) is a generator, and behaves very differently. Each time the
interpreter reaches the yield line, its execution is suspended. The only reason
those print statements return the same result is because we fed get_squares_gen
to the list constructor, which exhausts the generator completely by asking the
next element until a StopIteration is raised.
"""

def get_squares_gen(n):
    for x in range(n):
        yield x ** 2

squares = get_squares_gen(4) # this creates a generator object
print(squares) # <generator object get_...>
print(next(squares)) # prints: 0
print(next(squares)) # 1
print(next(squares)) # 4
print(next(squares)) # 9
# the following raises StopIteration, the generator is exhausted, any further
# call to next will keep raising StopIteration
print(next(squares))