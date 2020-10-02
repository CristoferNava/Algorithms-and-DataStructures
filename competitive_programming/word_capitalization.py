word = input()

new_word = []
for i in range(len(word)):
    if i == 0:
        new_word.append(word[i].upper())
        continue
    new_word.append(word[i])

new_word = ''.join(new_word)
print(new_word)