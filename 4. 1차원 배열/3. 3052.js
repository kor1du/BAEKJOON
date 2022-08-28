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
  remainder = new Array();
  input.forEach((element) => {
    remainder.push(element % 42);
  });

  const diffrentNumbers = remainder.filter((val, idx) => {
    return remainder.indexOf(val) === idx;
  });
  console.log(diffrentNumbers.length);
};
