from time import sleep, time

def f():
    sleep(.3)

def g():
    sleep(.5)

t = time()
f()
print(f'f took: {time() - t}')

t = time()
g()
print(f'g took: {time() - t}')


# trying to avoid the repeat code
def f():
    sleep(.3)

def g():
    sleep(.5)

def measure(func):
    t = time()
    func()
    print(f'{func.__name__} took {time() - t}')

measure(f)
measure(g)


# what if we need to pass arguments to the function we measure?
def f(sleep_time=0.1):
    sleep(sleep_time)

def measure(func, *args, **kwargs):
    t = time()
    func(*args, **kwargs)
    print(f'{func.__name__} took {time() - t}')

measure(f, sleep_time=0.3)
measure(f, 0.2)
print()

# we can push it a little bit further. We want to somehow have that timing
# behavior built-in into the f function, so that we could just call it and have
# that measure taken. 
def f(sleep_time=0.1):
    sleep(sleep_time)

def measure(func):
    def wrapper(*args, **kwargs):
        t = time()
        func(*args, **kwargs)
        print(f'{func.__name__} took, {time() - t}')
    return wrapper

super_f = measure(f) # decoration point
super_f(0.5)
super_f(sleep_time=.1) 
print(super_f.__name__) # wrapper


# now we can start using decorators
"""
def func(arg1, arg2, ...):
    pass
func = decorator(func)

is equivalent to the following:

@decorator
def func(arg1, arg2, ...):
    pass

instead of manually reassigning the function to that was returned by the decorator,
we prepend the definition of the function with special syntax, @decorator_name

we can apply multiple decorators to the same function in the following way:

def func(arg1, arg2, ...):
    pass
func = deco1(deco2(func))

is equivalent to the following

@deco1
@deco2
def func(arg1, arg2, ...):
    pass

the closer the decorator is to the function, the sooner it is applied.

Some decorators can take arguments. This technique is generally used to produce
other decorators:

def func(arg1, arg2, ...):
    pass
func = decoarg(arg_a, arg_b) (func)

# is equivalent to the following:
@decoarg(arg_a, arg_b)
def func(arg1, arg2, ...):
    pass
"""

from functools import wraps

def measure(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        t = time()
        func(*args, **kwargs)
        print(f'{func.__name__} took: {time() - t}')
    return wrapper

# wrapper actually wraps func, with this the original name docstring are now 
# maintained.
@measure
def f(sleep_time=0.1):
    """I'm a cat. I love to sleep! """
    sleep(sleep_time)
f(sleep_time=0.3)
print(f'{f.__name__} took: {f.__doc__}')