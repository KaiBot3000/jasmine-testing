describe("test function", function() {
	it("runs!", function() {
		expect(testMe()).toEqual("I work!");
	});
});

describe("Adding Machine", function() {
	it("adds positive numbers", function() {
		expect(adder(3, 4)).toEqual(7);
	});

	it("adds negative numbers", function() {
		expect(adder(-1, 0)).toEqual(-1);
	});

	it("Doesn't equal the wrong thing", function() {
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