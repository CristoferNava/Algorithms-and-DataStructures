def remove_duplicate(arr):
    times = len(arr)
    i = 0

    while i < times - 1:
        if arr[i] == arr[i + 1]:
            del arr[i + 1]
            times = len(arr)
            continue
        i += 1

    return len(arr)

    # time complexity: O(n)
    # space complexity: O(1)

arr = [0,0,1,1,1,2,2,3,3,4]
remove_duplicate(arr)