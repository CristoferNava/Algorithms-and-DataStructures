# Find the max value.
# Count the number of max value

def birthday_cake_candles(arr):
    # find the highest candle
    max_candle = arr[0]
    for x in arr:
        if x > max_candle:
            max_candle = x
    
    # count the number of candles that can blow out
    candles = 0
    for x in arr:
        if x == max_candle:
            candles += 1
    return candles

arr = [3, 2, 1, 3]
print(birthday_cake_candles(arr))