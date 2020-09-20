from typing import List
''' Bubble sort consists of n rounds. On each round, the algorithm iterates
through the elements of the array. Whenever two consecutive elements are found
that are not in correct order, the algorithm swaps them. After the first round
the largest element will be in the correct position, after k rounds, the k 
largest elements will be in the correct positions. Thus, after n rounds, the 
whole array will be sorted'''

def bubble_sort(arr: List[int]) -> List[int]:
    # time complexity: O(n^2)
    # space complexity: O(n)    
    n = len(arr)
    for _ in range(n):
        for j in range(n - 1):
            if (arr[j] > arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

numbers = [1, 3, 8, 2, 9, 2, 5, 6]
print(bubble_sort(numbers))