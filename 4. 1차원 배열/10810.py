condition = input().split(" ")
numArr = [0] * int(condition[0])
m = int(condition[1])
    
for i in range(m):
    inputNumArr = input().split(" ")
    startIndex = int(inputNumArr[0]) - 1
    endIndex = int(inputNumArr[1])
    targetNum = int(inputNumArr[2])

    for j in range(startIndex,endIndex):
        numArr[j] = targetNum

print(*numArr)
