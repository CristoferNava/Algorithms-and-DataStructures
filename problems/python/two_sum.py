def two_sum(arr, target):
    dict = {}
    for i, num in enumerate(arr):
        dict[num] = i
    
    for i in range(len(arr)):
        comp = target - arr[i]
        if comp in dict.keys() and dict[comp] != i:
            return [i, dict[comp]]

# Time Complexity: O(n)
# Space Complexity: O(n)