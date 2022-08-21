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
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  const c = parseInt(input[2]);

  if (a == b && a == c) {
    console.log(a * 1000 + 10000);
  } else if (a == b && a != c) {
    console.log(a * 100 + 1000);
  } else if (a == c && a != b) {
    console.log(a * 100 + 1000);
  } else if (b == a && b != c) {
    console.log(b * 100 + 1000);
  } else if (b == c && b != a) {
    console.log(b * 100 + 1000);
  } else {
    const biggestNum = Math.max(...input);
    console.log(biggestNum * 100);
  }
};
