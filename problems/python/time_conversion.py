# hh:mm:ss:AM or hh:mm:ss:PM
# "07:05:45:PM" -> "19:05:45"
# if the hour starts with A then let it has 

def time_conversion(s):
    s = list(s)
    # check if the is AM or 
    if s[8] == 'A':
        # Special case if it is 12 AM
        if s[0:2] == ['1', '2']:
            s[0:2] = ['0','0']   
    else:
        if not s[0:2] == ['1', '2']:
            hour = int(''.join(s[0:2])) + 12
            hour = str(hour)
            s[0] = hour[0]
            s[1] = hour[1]
    del s[8:]
    return ''.join(s)
            

test = "07:05:45PM"
print(time_conversion(test))