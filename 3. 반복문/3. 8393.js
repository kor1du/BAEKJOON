const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    // 공백을 기준으로
    input = line.split(" ");
    readline.close();
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const limit = parseInt(input[0]);
  var sum = 0;
  for (var i = 1; i <= limit; i++) {
    sum += i;
  }
  console.log(parseInt(sum));
};
