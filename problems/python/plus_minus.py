def plus_minus(arr):
    negatives, positives, zeros = (0, 0, 0)

    for element in arr:
        if element < 0:
            negatives += 1
        elif element == 0:
            zeros += 1
        else:
            positives += 1

    return (positives / len(arr), negatives / len(arr), zeros / len(arr))


arr = [-4, 3, -9, 0, 4, 1]
print(plus_minus(arr))