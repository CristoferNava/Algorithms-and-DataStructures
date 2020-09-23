from typing import List

def merge(arr1: List[int], arr2: List[int]) -> None:
    arr = []
    i = j = 0 # i traverse arr1 and j arr2

    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            arr.append(arr1[i])
            i += 1
        else:
            arr.append(arr2[j])
            j += 1
    
    arr + arr1[i:] + arr2[j:]
    print(arr)


arr1 = [1, 2, 5, 7]
arr2 = [3, 5, 10]
merge(arr1, arr2)