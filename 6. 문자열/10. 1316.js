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
	const limit = input[0];
	var count = 0;

	for (var i = 1; i <= limit; i++) {
		const word = input[i].split('');
		let isGroupWord = 1;
		if (isGroupWord === 0) break;
		for (var j = 0; j < word.length; j++) {
			if (isGroupWord === 0) break;
			if (j + 1 != word.length && word[j] != word[j + 1]) {
				for (var k = j + 1; k < word.length; k++) {
					if (word[k] === word[j]) {
						isGroupWord = 0;
						break;
					}
				}
			}
		}
		count = isGroupWord ? ++count : count;
	}
	console.log(count);
};
