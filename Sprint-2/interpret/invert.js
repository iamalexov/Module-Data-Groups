// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.value = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// The current return value is { key: 1 } because the code uses invertedObj.key
// which creates a property literally named "key", and assigns it the value 1
// The current


// b) What is the current return value when invert is called with { a: 1, b: 2 }
// It returns key: 2 because the property "key" is overwritten on each iteration of the loop

// c) What is the target return value when invert is called with {a : 1, b: 2}
// It will return value should be { "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key–value pairs from an object
// It is needed so we can iterate over the object and access both the keys and the values, which allows us to swap them


// d) Explain why the current return value is different from the target output
// The current return value is different because the code uses invertedObj.key
// which creates a property literally named

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;



test("inverts keys and values", () => {
  const input = { a: 1, b: 2 };
  const output = { "1": "a", "2": "b" };

  expect(invert(input)).toEqual(output);
});

test("returns empty object for empty input", () => {
  expect(invert({})).toEqual({});
});
