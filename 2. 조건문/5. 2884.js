const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (input) => {
  var a = parseInt(input[0]);
  var b = parseInt(input[1] - 45);

  if (b < 0) {
    a -= 1;
    b = 60 + b;
    if (a < 0) a = 24 + a;
  }

  console.log(`${a} ${b}`);
};
