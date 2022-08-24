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
  const limit = parseInt(input[0].split(" ")[0]);
  const max = parseInt(input[0].split(" ")[1]);
  const numbers = input[1].split(" ");

  for (var i = 0; i < limit; i++) {
    const num = numbers[i];
    num < max ? process.stdout.write(num + " ") : "";
  }
};
