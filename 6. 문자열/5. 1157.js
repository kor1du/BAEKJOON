const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    // 공백을 기준으로
    input.push(line);
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const word = input[0];
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const alphabetCount = Array.from({ length: 26 }, (x) => 0);

  for (const i of word) {
    const lowerCase = i.toLowerCase();
    const alphabetIndex = alphabetArray.indexOf(lowerCase);
    alphabetCount[alphabetIndex] = alphabetCount[alphabetIndex] += 1;
  }
  const maxNum = Math.max(...alphabetCount);
  var count = 0;
  alphabetCount.forEach((val, i) => {
    if (count > 1) return;
    if (val === maxNum) count++;
  });
  count > 1
    ? console.log("?")
    : console.log(alphabetArray[alphabetCount.indexOf(maxNum)].toUpperCase());
};
