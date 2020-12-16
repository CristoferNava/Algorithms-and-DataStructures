# def suma(n1, n2):
#     return n1 + n2

# sum2 = lambda a, b: a + b

def filtrado(func, a, b):
    """ Filtra los resultados pares e impares. """
    result = func(a, b)
    if result % 2 == 0:
        print("El resultado es par")
    else:
        print("El resultado es impar")

# filtrado(lambda a, b: a * b, 2, 2)

# l = [x for x in range(1, 11)] # [1, 2, ... 10]
# nl = list(filter(lambda x: x % 2 != 0, l))

# print(nl)

# def dummie(x: int):
#     if x > 2:
#         return True
#     else:
#         return False


# nl = list(filter(dummie, l))
# print(nl)


def myFilter(func, lista):
    newList = []
    for x in lista:
        if func(x):
            newList.append(x)
    return newList

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = myFilter(lambda x: x % 2 != 0, l)
print(result)