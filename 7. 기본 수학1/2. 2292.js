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
	const inputNum = parseInt(input[0]);
	var count = 0;
	var n = 1;
	var i = 0;
	while (inputNum > n) {
		n = n + 6 * i;
		i++;
	}

	count = inputNum == '1' ? 1 : i;

	console.log(count);
};
