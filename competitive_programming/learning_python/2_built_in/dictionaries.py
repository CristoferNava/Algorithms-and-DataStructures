# Different ways for creating a dictionary
a = dict(a=1, z=-1)
b = {'a': 1, 'z': -1}
c = dict(zip(['a', 'z'], [1, -1]))
d = dict([('a', 1), ('z', -1)])
e = dict({'a': 1, 'z': -1})
# print(a == b == c == d == e)

# basic operations
d = {}
d['a'] = 1
d['b'] = 2
print(len(d))
del d['a'] # remove a
d['c'] = 3 # adds 'c'
print('c' in d) # checks against the keys
d.clear() # remove all the elements from the dict

d = {
    'cristofer': 22,
    'alfonso': 22,
    'josue': 23,
}

keys = d.keys()
print(keys)
values = d.values()
print(values)
items = d.items()
print(items)
print(22 in d.values())
print(('alfonso', 22) in d.items())

d = dict(zip('hello', range(1, 6)))
print(d)
result = d.popitem() # removes and returns the last element
print(result)
result = d.pop('l') 
print(result)