def sieve(n):
    primes = []
    is_prime = [1 for i in range(n+1)]
    is_prime[0] = is_prime[1] = 0

    for i in range(n+1):
        if is_prime[i]:
            primes.append(i)
            m = 2
            while i*m <= n:
                is_prime[i*m] = 0
                m += 1

    print(primes)

sieve(10)