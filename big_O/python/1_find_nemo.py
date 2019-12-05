import timeit

code_to_test = """
large = ["pollo" for value in range(100)]
for value in large:
    if value == 'nemo':
        print('We found Nemo!')
"""

elapsed_time = timeit.timeit(code_to_test, number=1) / 100 
print(elapsed_time)