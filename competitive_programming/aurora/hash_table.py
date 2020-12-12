algo = {
    'name': 'aurora',
    'age': 20,
    'student': True,
    'score': 22.5,
    12: 'paleta',
    True: True,
}


print(algo.keys())
print(algo.values())
print(algo.items())

print('name' in algo.keys())
print(20 in algo.values())
print(('name', 'aurora') in algo.items())
x, y = ('key', 'value')

for k, v in algo.items():
    print(k, v)

for k in algo.keys():
    print(k)

algo['married'] = True
print(algo)

if algo['married']:
    print('pasó')

r = algo.get('namee', 12)
print(r)
print(algo)
r1 = algo.popitem()
print(r1)
print(algo)

del algo[12]
print(algo)
algo.pop('nameeee', False)
print(algo)