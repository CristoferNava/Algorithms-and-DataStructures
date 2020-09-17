array = [x for x in range(1, 11)]

i = 0
def traverse(arr):
    global i
    if i == len(arr):
        return None
    print(arr[i])
    i += 1
    traverse(arr)

# traverse(array)

def traverse2(arr, i):
    if i == len(arr):
        return None
    print(arr[i])
    traverse2(arr, i+1)

traverse2(array, 0)