string = input()

test = set()
for c in string:
    test.add(c)

if len(test) % 2 == 0:
    print('CHAT WITH HER!')
else:
    print('IGNORE HIM!')  