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

  for (var i = 1; i <= limit; i++) {
    var stars = "";
    for (var j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};
