n, m = map(int, input().split())
list = [i+1 for i in range(n)]
for _ in range(m):
    i,j = map(int, input().split())
    temp = list[i-1:j]
    temp.reverse()
    list[i-1:j] = temp

for i in range(n):
    print(list[i],end=' ')