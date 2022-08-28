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
    const scores = input[i].split(" ").map((number) => parseInt(number));
    for (var j = 1; j < scores.length; j++) {
      sum += scores[j];
    }
    const average = sum / scores[0];
    sum = 0;
    for (var j = 1; j < scores.length; j++) {
      sum = scores[j] > average ? ++sum : sum;
    }
    console.log(`${((100 / scores[0]) * sum).toFixed(3)}%`);
  }
};
