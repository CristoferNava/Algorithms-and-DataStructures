# Let's amend max_result (two_decorators.py) so that it allows us to decorate
# functions specifying the threshold.
from functools import wraps

def max_result(threshold):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            if result > threshold:
                print(f'Result is too big ({result}). Max allowed is {threshold}')
            return result
        return wrapper
    return decorator

@max_result(75) 
def cube(n):
    return n ** 3

print(cube(5))


"""The preceding code shows you how to write a decorator factory. If you recall,
decorating a function with a decorator that takes arguments is the same as writing
func = decorator(argA, argB) (func)
so when we decorate cube with max_result(75) we're doing
cube = max_result(75) (cube)
"""