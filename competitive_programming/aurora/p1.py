# arreglo con números mayores a 0
# imprimir el tamaño del conjunto más grande debe ser consecutivo y sus números, revisar
# que n-1 es consecutiva a 0
# [6, 2, 3, 3, 4, 5, 5, 5, 6, 63] -> 
from typing import List

def maxSubset(arr: List[int]) -> int:
    # s: O(1)
    # t: O(n)
    # caso base
    sumSubset = 1
    maxSub = sumSubset 

    # cuando el arreglo es de 1 elemento no entra al for
    # t: O(n)
    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            # para cuando el elemento i+1 es igual a i
            sumSubset += 1
            if sumSubset > maxSub:
                maxSub = sumSubset
        else:
            # el elemento es diferente
            sumSubset = 1
    # ciclo for nos duelve la mejor sin contar el primer element (no circular)
    # maxSubset = 5

    if arr[0] == arr[-1]:
        b = False 
        for i in range(0, len(arr) - maxSub):
            b = True
            if arr[i] == arr[i + 1]:
                maxSub += 1
        if b:
            maxSub +=1

    return maxSub
    # time: O(n) space: O(1)


s = input()
s = s.split(',')
arr = []
for c in s:
    arr.append(int(c))

print(maxSubset(arr))
# print(arr)
# estoy en el último índice
# n - 1 == i

# [1, 1, 2, 3, 4, 1] -> 3

'''
print(sum(arr))
i 
if arr[i] == arr[i+1]
    sum += 1
    if (sum > best):
        best = sum
else:
    sum = 1  

[6, 2, 3, 4, 5, 6, 6] # 2

sum = 1
best = 1 #
'''

