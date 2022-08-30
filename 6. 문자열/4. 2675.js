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
  const limit = parseInt(input[0]);
  for (i = 1; i <= limit; i++) {
    let testCase = input[i].split(" ");
    let testTimes = Number(testCase[0]);
    let testCaseString = testCase[1].trim().split("");
    let result = "";
    for (let j = 0; j < testCaseString.length; j++) {
      result += testCaseString[j].repeat(testTimes);
    }
    console.log(result);
  }
};
