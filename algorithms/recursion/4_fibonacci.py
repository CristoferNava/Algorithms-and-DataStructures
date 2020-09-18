def recursiveFibonacci(n: int) -> int:
    if n == 0 or n == 1:
        return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

def iterativeFibonacci(n: int) -> int:
    # 0, 1, 1, 2, 3, 5
    i, j = (0, 1)
    if n == 0 or n == 1:
        return n

    for _ in range(n-1):
        k = i + j
        j, i = k, j
    return k

for i in range(10):
    print(iterativeFibonacci(i), end = ' ')

print()

for i in range(10):
    print(recursiveFibonacci(i), end = ' ')

print()
