list = ['dz=','lj','nj','c=','c-','d-','s=','z=']
count = 0
word = input()
for i in list:
  while word.find(i) != -1:
    index = word.find(i)
    count += 1
    word= word[:index]+' '+word[index+len(i):]
print(count + len(word.replace(' ', '')))
