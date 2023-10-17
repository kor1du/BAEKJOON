studentArr = list(range(1,31))
notSubmittedStudentArr = []

for i in range(0,28):
    submittedStudentNumber = int(input())
    studentArr[submittedStudentNumber - 1] = 0

for i in range(0,30):
    if studentArr[i] != 0:
        notSubmittedStudentArr.append(i + 1)

notSubmittedStudentArr.sort(reverse = False)

for i in range(0,2):
    print(notSubmittedStudentArr[i])
