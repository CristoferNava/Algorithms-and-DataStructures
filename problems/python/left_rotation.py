def left_rotation(arr, d):
    n = len(arr)
    new_arr = [None] * n
    
    if d > n:
        d %= n
    for i in range(len(arr)):
        new_arr[i - d] = arr[i]

    return new_arr