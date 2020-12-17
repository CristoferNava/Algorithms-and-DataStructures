from typing import List

def singleNumber(nums: List[int]) -> int:
    a = 0
    for i in nums:
        a ^= i
    return a

test = [3, 3, 4, 5, 6, 5, 6]
print(singleNumber(test))