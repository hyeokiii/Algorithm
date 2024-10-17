price = int(input())
number = int(input())
result = 0

for i in range(0, number):
    A, B = map(int, input().split())
    result += A*B

if result == price:
    print("Yes")
else:
    print("No")