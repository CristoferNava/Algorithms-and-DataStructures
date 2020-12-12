def minimum(*n):
    if n:
        nm = [0]
        for x in n[1:]:
            if x < nm:
                nm = x
        print(nm)

values = (1, 3, -7, 9)
minimum(values) # minimum((1, 3, -7, 9))
minimum(*values) # minimum(1, 3, -7, 9)