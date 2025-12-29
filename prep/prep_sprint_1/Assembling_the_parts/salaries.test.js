const calculateMean = require("./mean");
const calculateMedian = require("./median");


test("calculates the median of a list of odd length", () => {
const salaries = [10, 20, 30, 40, 60, 80, 80];
  const median = calculateMedian(salaries);
  const targetOutput = 40;

  expect(median).toEqual(targetOutput);
});


test("calculates the mean of a list of numbers", () => {
  const salaries = [3, 50, 7];
  const currentOutput = calculateMean(salaries);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});



/* console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`); */