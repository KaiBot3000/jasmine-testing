describe("test function", function() {
	it("runs!", function() {
		expect(testMe()).toEqual("I work!");
	});
});

describe("Adding Machine", function() {
	it("adds positive numbers", function() {
		expect(add(3, 4)).toEqual(7);
	});

	it("adds negative numbers", function() {
		expect(add(-1, 0)).toEqual(-1);
	});
});