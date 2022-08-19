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
  if (a >= 90 && a <= 100) {
    console.log("A");
  } else if (a >= 80 && a < 90) {
    console.log("B");
  } else if (a >= 70 && a < 80) {
    console.log("C");
  } else if (a >= 60 && a < 70) {
    console.log("D");
  } else {
    console.log("F");
  }

  process.exit();
});
