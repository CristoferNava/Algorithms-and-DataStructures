l1 = [x + 5 for x in [2, 3, 4]]
print(l1)

l2 = list((1, 2, 3)) # list from a tuple
print(l2)

l3 = list('hello') # list from a string ['h', 'e', ''...]
print(l3)

# cool methods of a list
a = [1, 2, 3, 3, 5]
print(a.count(3))

a.extend([6, 7, 8])
print(a)
print(a.index(3))

a.insert(0, 17)
print(a)

a.pop() # remove and return last element
a.pop(3) # remove the element at position 3
a.remove(17) # remove element with the value 17
a.sort() 
a.clear() # remove all elements from the list
a = [1, 2]
min(a)
max(a)
sum(a)
len(a)
test = [None] * 5
print(test) 