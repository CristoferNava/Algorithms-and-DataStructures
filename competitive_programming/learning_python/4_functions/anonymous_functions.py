# we want a list of all the numbers up to N that are multiples of five. 
# we want to user the filter function, which takes a function and an iterable
# and constructs a filter object that you can iterate on, from those elements
# of iterables for which the function returns True.

# without usin an anonymous function:
def is_multiple_of_five(n):
    return not n % 5

def get_multiples_of_five1(n):
    return list(filter(is_multiple_of_five, range(n)))

# using a lambda function
def get_multiples_of_five(n):
    return list(filter(lambda k: not k % 5, range(n)))