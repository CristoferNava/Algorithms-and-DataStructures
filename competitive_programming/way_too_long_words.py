# A. Way Too Long Words
def solution(word: str) -> str:
    if len(word) > 10:
        return word[0] + str(len(word)-2) + word[-1]
    return word

n = int(input())
words = []
for i in range(n):
    words.append(input())

for word in words:
    print(solution(word))

