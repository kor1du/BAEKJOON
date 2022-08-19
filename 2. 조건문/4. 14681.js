let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > 0 && b > 0) console.log(1);
else if (a < 0 && b > 0) console.log(2);
else if (a < 0 && b < 0) console.log(3);
else console.log(4);
