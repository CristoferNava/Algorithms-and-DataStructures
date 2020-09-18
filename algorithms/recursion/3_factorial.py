def iterative_factorial(number):
    for i in range(1, number):
        number *= i
    return number

def recursive_factorial(number):
    if number in (0, 1):
        return number
    return number * recursive_factorial(number - 1)

print(iterative_factorial(5))
print(recursive_factorial(5))