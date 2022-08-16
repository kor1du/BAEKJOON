const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input = line.split(" ");
  rl.close();
});

rl.on("close", () => {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  const c = parseInt(input[2]);

  const num1 = (a + b) % c;
  const num2 = ((a % c) + (b % c)) % c;
  const num3 = (a * b) % c;
  const num4 = ((a % c) * (b % c)) % c;

  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);

  process.exit();
});
