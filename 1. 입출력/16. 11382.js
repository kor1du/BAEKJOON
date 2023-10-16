const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
	input = line.split(' ');
	rl.close();
});

rl.on('close', () => {
	const a = parseInt(input[0]);
	const b = parseInt(input[1]);
	if (a > b) console.log('>');
	else if (a < b) console.log('<');
	else if (a == b) console.log('==');

	process.exit();
});
