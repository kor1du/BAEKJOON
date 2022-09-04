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
	var sum = 0;
	var count = 1;
	while (sum < inputNum) {
		sum += count;
		count++;
	}
	count -= 1;

	if (count % 2 === 1) {
		console.log(`${sum - inputNum + 1}/${count - (sum - inputNum)}`);
	} else {
		console.log(`${count - (sum - inputNum)}/${sum - inputNum + 1}`);
	}
};
