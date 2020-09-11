def reverse_string(string: str) -> str:
    # build an array with the characaters of the string
    arr = list(string) # time: O(n), # space: O(n)
    
    for i in range((len(arr) // 2)): # time: O(n)
        arr[i], arr[len(arr) - 1 - i] = arr[len(arr) - 1 - i], arr[i]
    
    string = ''.join(arr)
    return string

# time complexity: O(n)
# space complexity: O(n)