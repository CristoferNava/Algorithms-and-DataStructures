"""send() allows us to communicate a value back to the generator object.
When we call a generator.send(), the value that we feed to send will be passed
in to the generator, execution is resumed, and we can fetch it via yield expression.
"""

def counter(start=0):
    n = start
    while True:
        result = yield n
        print(type(result), result)
        if result == 'Q':
            break
        n += 1

c = counter()
print(next(c)) 
print(c.send('Wow')) 
print(next(c)) 
print(c.send('Q')) 