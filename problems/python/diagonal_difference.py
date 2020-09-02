''' Given a square matrix, calculate the absolute difference between the sums 
of its diagonals.
For example, the square matrix  is shown below:
1 2 3
4 5 6
9 8 9
The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal 
3 + 5 + 9 = 17
Their absolute difference is |15 - 17| = 2
'''

def diagonals_sum(arr):
    j = len(arr[0]) - 1 
    first_diagonal, second_diagonal = 0, 0

    for i in range(len(arr)):
        first_diagonal += arr[i][i]
        second_diagonal += arr[i][j-i] 

    return abs(first_diagonal - second_diagonal)

test = [[11, 2, 4],
        [4, 5, 6], 
        [10, 8, -12]]

print(diagonals_sum(test))