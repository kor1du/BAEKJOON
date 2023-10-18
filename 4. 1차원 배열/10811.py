import math

condition = input().split(' ') # ex)"5 4"

n = int(condition[0]) # ex)5
m = int(condition[1]) # ex)4

baskets = list(range(1,n + 1)) # ex)[1,2,3,4,5]

for i in range(0, m):
    reverseCondition = input().split(' ')
    startIndex = int(reverseCondition[0]) - 1
    endIndex = int(reverseCondition[1]) - 1
    secondLoopSize = math.ceil((endIndex - startIndex) / 2)

    for j in range(0, secondLoopSize):
        swapStartIndex = startIndex + j
        swapEndIndex = endIndex - j
        baskets[swapStartIndex], baskets[swapEndIndex] = baskets[swapEndIndex], baskets[swapStartIndex]

print(*baskets)