s = input()

t = []
for c in s:
    if c == 'h' and len(t) == 0:
        t.append('h')
    if c == 'e' and len(t) == 1:
        t.append('e')
    if c == 'l' and t.count('l') == 1:
        t.append('l')
    if c == 'l' and len(t) == 2:
        t.append('l')
    if c == 'o' and len(t) == 4:
        t.append('o')
        break

t = ''.join(t)
if t == 'hello':
    print('YES')
else:
    print('NO')