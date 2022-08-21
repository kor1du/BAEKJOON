const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (input) => {
  var hour = parseInt(input[0][0]);
  var minute = parseInt(input[0][1]);
  const cookingTime = parseInt(input[1][0]);
  minute += cookingTime;
  const quotient = parseInt(minute / 60);

  if (quotient > 0) {
    hour += quotient;
    minute -= 60 * quotient;
    if (hour >= 24) {
      hour -= 24;
    }
  }

  console.log(`${hour} ${minute}`);
};
