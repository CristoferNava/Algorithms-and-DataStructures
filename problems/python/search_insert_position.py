from typing import List

def search_insert_postion(arr: List[int], target: int) -> int:
    # using binary search
    left = 0 
    right = len(arr) - 1

    while left <= right:
        middle = (left + right) // 2
        if arr[middle] == target:
            return middle
        elif target < arr[middle]:
            right = middle - 1
        else:
            left = middle + 1
    if target < arr[middle]:
        return middle
    else:
        return middle + 1

# time complexity: O(log n)
# space complexity: O(1)