def mini_max_sum(arr):
    min = max = arr[0]
    # find the min and max value
    for x in arr:
        if x < min:
            min = x
        if x > max:
            max = x
    
    min_sum = max_sum = 0
    # find the min_sum and the max_sum using len(arr) - 1 integers
    for x in arr:
        min_sum += x
        max_sum += x

    min_sum -= max
    max_sum -= min
    print(min_sum, max_sum)

arr = [x for x in range(1, 10, 2)]
print(arr)
mini_max_sum(arr)