const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test(" Given a contains function, return true if the object contains the property, false otherwise", function () {
  const object = {a: 1, b: 2};
  const propertyName = "c";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});


// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object return false", () => {
    const object = {};
    expect(contains(object, "a")).toEqual(false)
});


test("Given an empty object, returns false", function () {
  const object = {};
  const propertyName = "";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true


test("given existing property name, returns true", function () {
  const object = {a: 1, b: 2};
  const propertyName = "a";
  const currentOutput = contains(object, propertyName);
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
describe("contains", () => {

test("Given an object with properties with a non-existent property name, returns false", function () {
  const object = {a: 1, b: 2};
  const propertyName = "c";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("Given null, returns false", function () {
  const object = null;
  const propertyName = "a";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("Given an empty object, returns false", function () {
  const object = {};
  const propertyName = "a";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

})

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("Given invalid parameter, returns false", function () {
  const object = ["a", "b", null, "false"];
  const propertyName = "c";
  const currentOutput = contains(object, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});