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
  const limit = input[0];
  const scores = input[1].split(" ").map((ele) => {
    return parseInt(ele);
  });
  const maxNum = Math.max(...scores);
  var sum = 0;
  for (var i = 0; i < limit; i++) {
    sum += (scores[i] / maxNum) * 100;
  }
  console.log(sum / limit);
};
