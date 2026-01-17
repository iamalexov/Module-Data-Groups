/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

test("given an empty array, it returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number


describe("Find max in an array with the single element", () => {
  [
    { input: [-136], expected: -136 },
    { input: [-1], expected: -1 },
    { input: [0], expected: 0 },
    { input: [3], expected: 3 },
    { input: [2354], expected: 2354 },
  ].forEach(({input, expected}) =>
    it(`Returns max for [${input}]`, () => expect(findMax(input)).toEqual(expected))
  );
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("Given an array with both positive and negative numbers,Then it should return the largest number ", () => {
    
   const input = [-2, 3, -1, 5, 8];
   const result = findMax(input);
  
    expect(result).toBe(8);
});



// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("Given an array with just negative numbers,Then it should return the closest one to zero", () => {
    
   const input = [-2, -3, -1, -5, -8];
   const result = findMax(input);
  
    expect(result).toBe(-1);
});

describe("Find max in array with negative and positive values", () => {
  [
    { input: [-1, 1], expected: 1 },
    { input: [-13, -6, 1, 3], expected: 3 },
    { input: [-4, 10, 21, 14, 3], expected: 21 },
    { input: [-2, 3, -4, 1, -5, -10], expected: 3 },
    { input: [14, 7, 8, -3, -34], expected: 14 },
  ].forEach(({input, expected}) =>
    it(`Returns max for [${input}]`, () => expect(findMax(input)).toEqual(expected))
  );
});


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("Given an array with decimal numbers,Then it should return the largest decimal number", () => {
    
   const input = [2.4, 3.2, 1.5, 5.5, 8.3];
   const result = findMax(input);
  
    expect(result).toBe(8.3);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("Given an array with non-number values,Then it should return the max and ignore non-numeric values", () => {
    
   const input = [2, "3", 1, "5", 8, "string"];
   const result = findMax(input);
  
    expect(result).toBe(8);
});



describe("Find max in array with decimal values", () => {
  precision = 10 ** -3,
  [
    { input: [0.1, 0.2, 0.3], expected: 0.3 },
    { input: [-0.1, -0.2, -0.3], expected: -0.1 },
    { input: [-2.4, 0.1, -1.3, -4], expected: 0.1 },
    { input: [2.7, -5.4, -8.2, 1.34, -3.21], expected: 2.7 },
    { input: [-8.0, 7.5, 9.0, -10.4, 7.7, -19.2, 8.9], expected: 9.0 },
  ].forEach(({input, expected}) =>
    it(`Returns max for [${input}]`, () => expect(findMax(input)).toBeCloseTo(expected, precision))
  );
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs


test("When passed to the max function, Then it should return the least surprising value given how it behaves for all other inputs", () => {

 expect(findMax(["2", "3", "1", "5", "8", "string"])).toBe(-Infinity);
});


describe("Returns -Infinity for array with only non-numeric values", () => {
  [
    { input: [null], expected: -Infinity },
    { input: [null, "seven", undefined], expected: -Infinity },
    { input: [null, null, true, {name: "John", surname: "Dow"}, [0, -2, 4]], expected: -Infinity },
  ].forEach(({input, expected}) =>
    it(`Returns -Infinity for [${input}]`, () => expect(findMax(input)).toEqual(expected))
  );
});
