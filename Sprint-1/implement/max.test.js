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

test("Given an array with one number,Then it should return that number", () => {
    
   const input = [8];
   const result = findMax(input);
  
    expect(result).toBe(8);
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

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs


test("When passed to the max function, Then it should return the least surprising value given how it behaves for all other inputs", () => {

 expect(findMax(["2", "3", "1", "5", "8", "string"])).toBe(-Infinity);
});

