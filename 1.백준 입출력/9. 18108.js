const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (line > 1000 || line < 3000) console.log(line - 543);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
