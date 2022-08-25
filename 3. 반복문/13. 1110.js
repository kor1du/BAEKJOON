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
  var goalNum = parseInt(input[0]) < 10 ? "0" + input[0] : input[0];
  var currNum = goalNum.toString();
  var count = 0;
  do {
    const charA = parseInt(currNum.charAt(0));
    const charB = parseInt(currNum.charAt(1));
    const sum = (charA + charB).toString();

    currNum = charB.toString() + sum.charAt(sum.length - 1);
    count++;
  } while (currNum != goalNum);
  console.log(count);
};
