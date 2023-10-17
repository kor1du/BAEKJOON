maxSize=int(input())
numArr=input().split(' ')
targetNum=input()
count=0

for i in range(maxSize):
    if numArr[i] == targetNum:
        count+=1

print(count)
