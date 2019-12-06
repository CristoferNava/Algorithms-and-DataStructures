# Log all pairs of array

box = [1, 2, 3, 4, 5]

def pairs(box):
    pairs_box = []
    for i in range(0, len(box)):
        for j in range(i + 1, len(box)):
            pairs_box.append([box[i], box[j]])

    return pairs_box

print(pairs(box))