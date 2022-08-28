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
  for (var i = 1; i < input.length; i++) {
    var sum = 0;
    var continuity = 1;
    for (var j = 0; j < input[i].length; j++) {
      if (input[i].charAt(j) === "O") {
        sum += continuity * 1;
        continuity++;
      } else {
        continuity = 1;
      }
    }
    console.log(sum);
  }
};
