# Given an array A, of N integers, print each element in reverse order as 
# single of space-separed integers.

def reverse_array(arr):
    reversed_array = arr[:]

    for i in range(len(arr)):
        reversed_array[i] = arr[len(arr) - 1 - i]

    print(reversed_array) 

numbers = [1, 2, 3, 4, 5]
reverse_array(numbers)