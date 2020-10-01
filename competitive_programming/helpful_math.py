s = input()
numbers = []

for c in s:
    if c != '+':
        numbers.append(c)
numbers.sort()

s2 = ''
for i, n in enumerate(numbers):
    s2 += n
    if i != len(numbers) - 1:
        s2 += '+'

print(s2)