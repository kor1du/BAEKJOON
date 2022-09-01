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
	const word = input[0].split('');
	var count = 0;

	for (var i = 0; i < word.length; i++) {
		if (i + 2 != word.length && word[i] === 'd' && word[i + 1] === 'z' && word[i + 2] === '=') {
			i += 2;
		} else if (i + 1 != word.length) {
			if (word[i + 1] === '=') {
				if (word[i] === 'c' || word[i] === 's' || word[i] === 'z') {
					i++;
				}
			} else if (word[i + 1] === 'j') {
				if (word[i] === 'l' || word[i] === 'n') {
					i++;
				}
			} else if (word[i + 1] === '-') {
				if (word[i] === 'c' || word[i] === 'd') {
					i++;
				}
			}
		}
		count++;
	}

	console.log(count);
};
