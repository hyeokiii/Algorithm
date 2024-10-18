num = input()
items = [] * int(num)
count = int(num)
list = []
for i in range(int(num)):
    items.append(input())

for item in items:
    for i in range(len(item)):
        if i == len(item)-1 and item[i] not in list:
             list.append(item[i])
        elif  i == len(item)-1 and item[i]  in list:
            count -= 1
            break
        elif item[i] != item[i+1] and item[i] not in list:
            list.append(item[i])
        elif item[i] in list:
            count -= 1
            break
    list.clear()

print(count)
