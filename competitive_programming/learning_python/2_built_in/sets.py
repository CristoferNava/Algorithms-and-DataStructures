small_primes = set() 
small_primes.add(2)
small_primes.add(3)
small_primes.add(4)
small_primes.add(5)
print(small_primes)

small_primes.add(1) # oh no, 1 is not a prime
small_primes.remove(1)
print(3 in small_primes)
small_primes.add(3) # trying to add 3 again
print(small_primes) # no change, duplication is not allowed 

# faster creation of a set
bigger_primes = set([5, 7, 11, 13])
more_primes = small_primes | bigger_primes # union operator
print(more_primes)

intersection = small_primes & bigger_primes # intersection operator
print(intersection)

difference = small_primes - bigger_primes # difference operator
print(difference)