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
  const dial = input[0].split("");
  const alphabetArray = [
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ",
  ];
  var count = 0;
  for (var i = 0; i < dial.length; i++) {
    const alphabet = dial[i];
    for (var j = 0; j < alphabetArray.length; j++) {
      const splitedAlphabet = alphabetArray[j].split("");
      splitedAlphabet.indexOf(alphabet) != -1 ? (count += j + 3) : "";
    }
  }
  console.log(count);
};
