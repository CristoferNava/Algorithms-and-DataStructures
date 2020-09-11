from typing import List

def binary_search(arr: List[int], target: int) -> bool:
    left = 0
    right = len(arr) - 1;
    steps = 1

    while left <= right:
        middle = (left + right) // 2
        if arr[middle] == target:
            return True
        elif target < arr[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return False