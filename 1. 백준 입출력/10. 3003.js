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
  const king = 1 - input[0];
  const queen = 1 - input[1];
  const rook = 2 - input[2];
  const bishop = 2 - input[3];
  const knight = 2 - input[4];
  const pawn = 8 - input[5];

  console.log(`${king} ${queen} ${rook} ${bishop} ${knight} ${pawn}`);
  process.exit();
});
