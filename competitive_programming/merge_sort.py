from typing import List

def merge(arr1: List[int], arr2: List[int]) -> List[int]:
    arr = []
    i = j = 0 # i traverse arr1 and j arr2

    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            arr.append(arr[i])
            i += 1
        else:
            arr.append(arr2[j])
            j += 1
    arr + arr1[i:] + arr2[j:]
    return arr

def merge_sort(arr: List[int]) -> List[int]:
    if len(arr) == 1:
        return arr

    middle = len(arr) // 2
    left_arr = arr[:middle]
    rigth_arr = arr[middle:]

    return merge(merge_sort(left_arr), merge_sort(rigth_arr))


test = [5, 3, 2, 9, 10, 1]
print(merge_sort(test))