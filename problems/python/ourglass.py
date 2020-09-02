def sum_hourglass(i, j, arr):
    sum = arr[i][j] + \
          arr[i-1][j-1] + \
          arr[i-1][j] + \
          arr[i-1][j+1] + \
          arr[i+1][j-1] + \
          arr[i+1][j] + \
          arr[i+1][j+1] 
    return sum

def hour_glass(arr):
    max = sum_hourglass(0, 0, arr)
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            if not (i in [0, len(arr) - 1] or j in [0, len(arr) - 1]):
                value = sum_hourglass(i, j, arr)
                if value > max:
                    max = value
    return max


arr = [[-9, -9, -9, 1, 1, 1],
       [ 0, -9,  0, 4, 3, 2],
       [-9, -9, -9, 1, 2, 3],
       [0, 0, 8,  6, 6, 0],
       [0, 0, 0, -2, 0, 0],
       [0, 0, 1,  2, 4, 0]]