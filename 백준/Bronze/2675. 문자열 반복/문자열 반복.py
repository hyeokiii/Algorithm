num = int(input())
for i in range(num):
    r,p = input().split()
    for j in range(len(p)):
        print(int(r)*p[j],end='')
    print()   