const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

readline
	.on('line', (line) => {
		// 공백을 기준으로
		input.push(line);
	})
	.on('close', function () {
		//이 안에 솔루션 코드 작성
		solution(input);
		process.exit();
	});

const solution = (input) => {
	const splitedInput = input[0].split(' ');
	const a = parseInt(splitedInput[0]);
	const b = parseInt(splitedInput[1]);
	const c = parseInt(splitedInput[2]);

	if (b >= c) {
		console.log(-1);
	} else {
		console.log(Math.floor(a / (c - b) + 1));
	}
};
