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
  const scores = input.map((ele) => {
    return parseInt(ele);
  });
  const maxNum = Math.max(...scores);
  console.log(maxNum);
  console.log(scores.indexOf(maxNum) + 1);
};
