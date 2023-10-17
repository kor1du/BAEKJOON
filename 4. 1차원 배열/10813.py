condition = input().split(' ')
basketsArray = list(range(1,int(condition[0]) + 1))
loopSize = int(condition[1])
                       
for i in range(loopSize):
    indexToChange = input().split()
    firstTargetIndex = int(indexToChange[0]) - 1
    secondTargetIndex = int(indexToChange[1]) - 1

    basketsArray[firstTargetIndex], basketsArray[secondTargetIndex] = basketsArray[secondTargetIndex], basketsArray[firstTargetIndex]

print(*basketsArray)    
