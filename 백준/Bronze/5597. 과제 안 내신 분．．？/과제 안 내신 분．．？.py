list = [i for i in range(1,31)]
for i in range(28):
    num = int(input())
    list.remove(num)

print(min(list))
print(max(list))