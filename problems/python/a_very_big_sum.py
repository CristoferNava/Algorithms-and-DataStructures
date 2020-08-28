def a_very_big_sum(arr):
    sum = 0
    for integer in arr:
        sum += integer
    return sum

big = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
print(a_very_big_sum(big))