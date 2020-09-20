from typing import List

def maximum_subarray(arr: List[int]) -> int:
    # time complexity: O(n)
    # space complexity: O(1) 
    best = arr[0]
    sum = 0
    for i in range(len(arr)):
        sum = max(arr[i], sum + arr[i])
        best = max(best, sum)
    return best

print(maximum_subarray([-1, 2, 4, -3, 5, 2, -5, 2]))