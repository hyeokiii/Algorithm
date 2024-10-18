n, m = map(int,input().split())
list = [0 for i in range(n)]

for _ in range(m):
    i,j, k = map(int,input().split())
    for idx in range(i,j+1):
        list[idx-1] = k

for i in range(n):
    print(list[i], end=' ')