function testMe() {
	return "I work!";
};

function adder(num1, num2) {
	var result = num1 + num2;
	return result;
};

function greet(name) {
	if (name) {
		return "Hello " + name;
	} else {
		return "What's your name?";
	};
};

function appendWord(word) {
	var startArray = ["apple", "berry"];
	startArray.push(word);
	return startArray;
};