const inputData = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");
const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

const num = String(b);
b1 = +num[2];
b2 = +num[1];
b3 = +num[0];
console.log(a * b1);
console.log(a * b2);
console.log(a * b3);
console.log(a * b);
