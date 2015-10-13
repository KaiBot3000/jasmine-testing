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

function appendItem(item) {
	var startArray = [1, 3, 5];
	return startArray.push(item);
}