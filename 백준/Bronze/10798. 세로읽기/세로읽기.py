array = [['' for _ in range(15)] for _ in range(5)]
result = ''

for i in range(5):
    word = list(input())
    for j in range(len(word)):
        array[i][j] = word[j]

for i in range(15):
    for j in range(5):
        if array[j][i] != '':
            result+=array[j][i]
print(result)