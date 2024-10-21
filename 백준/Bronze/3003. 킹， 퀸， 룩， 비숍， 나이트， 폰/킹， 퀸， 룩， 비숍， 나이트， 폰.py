chess = [1,1,2,2,2,8]
dong = list(map(int,input().split()))
result = []

for i in range(len(chess)):
    result.append(chess[i] - dong[i])

for i in range(len(result)):
    print(result[i],end=' ')