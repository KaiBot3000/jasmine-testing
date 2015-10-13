describe("test function", function() {
	it("runs!", function() {
		expect(testMe()).toEqual("I work!");
	});
});

describe("Adding Machine", function() {
	it("adds numbers", function() {
		expect(add(3, 4)).toEqual(7);
	});
});