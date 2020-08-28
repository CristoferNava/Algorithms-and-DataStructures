def simple_sum(arr):
    sum = 0
    for number in arr:
        sum += number
    
    return sum

test = [1, 2, 3]
print(simple_sum(test))