n ,b = map(int,input().split())
num_list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

result = ''
while b <= n:
    result += num_list[n % b]
    n = n // b
    
print((result+num_list[n])[::-1])