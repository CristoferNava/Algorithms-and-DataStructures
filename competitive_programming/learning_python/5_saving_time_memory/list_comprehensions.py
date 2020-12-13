"""A list comprehension consists of brackets containing an expression followed 
by a for clause, then zero or more for or if clauses. The result will be a new
list resulting from evaluating the expression in the context of the for and if
clauses which follow it.
"""

squares = [x**2 for x in range(1, 11)]
print(squares)

# let's now filter out the odd squares
# using map and filter
sq1 = list(
    map(lambda x: x ** 2, filter(lambda x: not x % 2, range(1, 11)))
)
print(sq1)

# using list comprehension
sq2 = [x ** 2 for x in range(1, 11) if x % 2 == 0]
print(sq2)


# nested comprehension
items = 'abcd' # aa, ab, ac, ad, bb, bc, bd, cc, cd, dd
pairs1 = []

for i in range(len(items)):
    for j in range(i, len(items)):
        pairs1.append((items[i], items[j])) 
print(pairs1)

# using a list comprehension
pairs2 = [(items[i], items[j]) 
           for i in range(len(items)) for j in range(i, len(items))]
print(pairs2)

print(pairs1 == pairs2)


# filtering a comprehension
# let's find all Pythagorean triples whose short sides are numbers smaller than 10
# (a, b, c) such a**2 + b**2 = c**2 | (a, b, c) are integers
from math import sqrt
# this will generate all possible pairs
mx = 10
triples = [(a, b, sqrt(a**2 + b**2))
            for a in range(1, mx) for b in range(a, mx)]
triples = filter(lambda triple: triple[2].is_integer(), triples)
triples = list(
    map(lambda triple: triple[:2] + (int(triple[2]), ), triples)
)
print(triples) # prints: [(3, 4, 5), (6, 8, 10)]


# using a list comprehension
mx = 10
triples = [(a, b, sqrt(a**2 + b**2))
            for a in range(1, mx) for b in range(a, mx)]
# here we combine filter and map in one CLEAN list comprehension
triples = [(a, b, int(c)) for a, b, c in triples if c.is_integer()]
print(triples)