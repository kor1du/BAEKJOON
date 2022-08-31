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
  const splitedInput = input[0].split(" ");
  splitedInput.forEach((val, i) => {
    splitedInput[i] = val.split("").reverse().join("");
  });
  console.log(Math.max(...splitedInput));
};
