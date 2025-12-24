const mean = require("./mean");

test("returns the mean of [2, 4]", () => {
  expect(mean([2, 4])).toBe(3);
});