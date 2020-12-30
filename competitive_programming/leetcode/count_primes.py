def count_primes(n):
    if n in (0, 1):
        return 0
    primes = 0
    is_prime = [1 for i in range(n)]
    is_prime[0] = is_prime[1] = 0

    for i in range(n):
        if is_prime[i]:
            primes += 1
            m = 2
            while i*m < n:
                is_prime[i*m] = 0
                m += 1

    return primes

print(count_primes(10))