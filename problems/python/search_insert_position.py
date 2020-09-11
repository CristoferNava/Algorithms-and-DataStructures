from typing import List

def searchInsert(arr: List[int], target: int) -> int:
    for i in range(len(arr)):
        if arr[i] == target:
            return i
        if target < arr[i]:
            return i
    return len(arr)

# time complexity: O(n), improve to O(log n)
# space complexity: O(1)

print(searchInsert([1, 3, 5, 6], 0))