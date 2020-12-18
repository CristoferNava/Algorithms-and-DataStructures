n = 19

def sumDigits(n):
    # time: O(c)
    sumD = 0
    while n > 0:
        digit = n % 10
        sumD += digit ** 2 
        n //= 10

    return sumD


def isHappy(n: int) -> bool:
    results = {}
    while True: # O(n) time
        value = sumDigits(n)

        
        if not results.get(value, False):
            # add to the map
            results[value] = True
        else:
            return False

        if value == 1:
            return True
        else:
            n = value

print(isHappy(1111111))
print(isHappy(19))
print(isHappy(2))
