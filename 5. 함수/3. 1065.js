function checkHansoo(num) {
  var diffrent = 0;

  for (var i = 1; i <= num; i++) {
    if (i < 100) {
      diffrent += 1;
      continue;
    }
    const a = parseInt(i / 100);
    const b = parseInt((i % 100) / 10);
    const c = parseInt((i % 100) % 10);

    const diffrent1 = b - a;
    const diffrent2 = c - b;

    if (diffrent1 == diffrent2) {
      diffrent++;
    }
  }
  console.log(diffrent);
}

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
  checkHansoo(input[0]);
};
