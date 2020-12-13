# I want a decorator that prints an error message when the result of a function
# is greater than a certaing threshold.
from time import sleep, time
from functools import wraps

def measure(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        t = time()
        result = func(*args, **kwargs)
        print(f'{func.__name__} took: {time() - t}')
        return result
    return wrapper

def max_result(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if result > 100:
            print(f'Result is too big ({result}). Max allowed is 100')
        return result
    return wrapper

@measure # this is cube = measure(cube)
@max_result # this is cube = max_result(cube) = wrapper()
def cube(n):
    return n ** 3

print(cube(2))
print()
print(cube(5))