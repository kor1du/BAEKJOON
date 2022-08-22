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
  const totalPrice = parseInt(input[0]);
  const limit = parseInt(input[1]);
  var sum = 0;

  for (var i = 2; i <= limit + 1; i++) {
    const price = parseInt(input[i].split(" ")[0]);
    const amount = parseInt(input[i].split(" ")[1]);

    sum += price * amount;
  }

  sum === totalPrice ? console.log("Yes") : console.log("No");
};
