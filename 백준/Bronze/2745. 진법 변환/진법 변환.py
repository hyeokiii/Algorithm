n ,b = input().split()
num_list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

n = n[::-1]
result = 0

for i,j in enumerate(n):
    result += (int(b)**i) * (num_list.index(j))

print(result)