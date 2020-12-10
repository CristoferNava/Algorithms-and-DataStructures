# list: es un arreglo dinámico

nums = [23, 35]
nums.append(44) # [23, 35, 44]
nums.insert(2, 12) # [12, 23, 35, 44]
nums.remove(35)  # remueve por valor
nums.pop() # remueve el último O(1)
nums.pop(0) # remueve el índice O(n)
# in
nums = [1, 2, 3, 4, 5]

# if 10 in nums:
#     print('sí está')

l1 = [1, 2, 3, 4, 5]
l2 = [6, 7, 8, 9, 10]
# l1.extend(l2)
l3 = l1 + l2 # concatenación de lista
# print(l3)

# [1, 2, 3, 4, 5]
#  0  1  2  3  4
#  -5   -4  -3  -2  -1
# access
# print(l1[-2])
# slices
l4 = l1[0:3:2]
l4 = l1[4:0:-1]
l4 = l1[::-1]

# references 
l1 = [12, 23, 45]
l2 = l1 # l2 es una referencia (otro nombre) de l1
# l2[0] = 14
# print(l1)
l2 = l1[:] # l2 tiene una copia de todos los valores de l1
# print(l2)

# sort: Timsort InsertionSort-MergeSort
# Insertion Sort: O(n^2) 100, 1000
# Merge Sort: O(n log(n)) llamadas recursivas en memoria
# 1, 2, 3, 4, 5

l1 = [23, 12, 11, 45, 1]
# l1.sort()
# l2 = sorted(l1, reverse=True)
l2 = sorted(l1)
l2 = l2[::-1]
# print(l1)
# print(l2)

# list comprehension
# quiero un arreglo con los primeros 100 enteros
l1 = [x for x in range(1, 10)]
# print(l1)
l1 = list(range(1, 15, 2))
# print(l1)

# cosas curiosas
l1 = [0] * 20
# print(l1)

# encontrar un número en una lista y devolver su índice

def test(arr):
    i = 0
    for x in arr:
        print(i, x)
        i += 1

def test2(arr):
    for i, x in enumerate(arr, 44):
        print(i, x)

l = [12, 21, 14, 15]
test2(l)
