counter = 0
def inception():
    global counter
    if counter > 4:
        return 'done'
    counter += 1
    return inception()

print(inception())