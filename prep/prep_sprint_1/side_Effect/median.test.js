const calculateMedian = require("./median");


test("doesn't modify the input", () => {
  const list = [1, 2, 3, 4];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3, 4]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});