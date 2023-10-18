condition = int(input())
words = [input() for _ in range(condition)]

for i in range(0, condition):
    targetWord = words[i]
    targetWordLen = len(targetWord) - 1
    if(len(targetWord) == 1):
        print(targetWord + targetWord)
    else:
        print(targetWord[0] + targetWord[targetWordLen])