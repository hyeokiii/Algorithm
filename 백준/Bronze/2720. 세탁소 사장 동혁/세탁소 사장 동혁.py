import sys
n = int(input())
read = sys.stdin.readline

case = [25,10,5,1]
result =[]

for num in range(n):
    num = int(read())
    coin = []
    for i in case:
        coin.append(num // i)
        num = num % i
    result.append(coin)

for i in result:
    print(*i)
