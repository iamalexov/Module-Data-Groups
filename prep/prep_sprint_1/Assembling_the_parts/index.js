const calculateMedian = require("./median");
const calculateMean = require("./mean");

/* const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`); */



const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);



/* The mean is incorrect because calculateMedian mutates the salaries array.
Inside calculateMedian, the splice method removes an element from the array.
As a result, when calculateMean is called, it receives a modified array, not the original one.
Because the data has changed, the mean is calculated incorrectly.
 */