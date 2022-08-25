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
  for (var i = 0; i < input.length; i++) {
    const a = parseInt(input[i].split(" ")[0]);
    const b = parseInt(input[i].split(" ")[1]);
    console.log(a + b);
  }
};
