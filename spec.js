describe("Tester", function() {
	it("runs!", function() {
		expect(testMe()).toEqual("I work!");
	});
});

describe("Adder", function() {
	it("adds positive numbers", function() {
		expect(adder(3, 4)).toEqual(7);
	});

	it("adds negative numbers", function() {
		expect(adder(-1, 0)).toEqual(-1);
	});

	it("doesn't equal the wrong thing", function() {
		expect(adder(4,2)).not.toEqual(0);
	});
});

describe("Greeter", function() {
	it("greets name", function() {
		expect(greet("Atlas")).toEqual("Hello Atlas");
	});

	it("works without a name argument", function() {
		expect(greet()).toContain("name?");
	});
});

describe("Appender", function() {
	it("contains the new word", function() {
		expect(appendWord("cherry")).toContain("cherry");
	});
});