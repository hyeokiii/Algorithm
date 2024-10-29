N = int(input())

for n in range(1, N + 1):
    row = int(input())
    arr = [[0 for i in range(j + 1)] for j in range(row)]
    arr[0][0] = 1
    if row > 1:
        arr[1][0] = 1 
        arr[1][1] = 1
    for i in range(2, row):
        for j in range(i + 1):
            if j == 0 or j == i:
                arr[i][j] = 1
            else:
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    print(f"#{n}")
    for i in range(row):
        print(*arr[i])
