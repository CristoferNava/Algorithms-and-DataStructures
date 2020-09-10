def removeElement(arr: list, val: int) -> int:
    times = len(arr)
    i = 0
    
    while i < times:
        if arr[i] == val:
            del arr[i]
            times = len(arr)
            continue
        i = i + 1
    return len(arr)

removeElement([1, 2, 2, 3], 2)