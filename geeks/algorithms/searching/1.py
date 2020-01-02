def search(arr, n, x):
    for i in range(0, n):
        if arr[i] == x:
            return i
    return -1

arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
x = 110
n = len(arr)

result = search(arr, n, x)
print(result)