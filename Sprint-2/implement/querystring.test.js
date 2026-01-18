// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("returns empty object for empty string", () => {
  const input ="";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);

  });

  test( "pareses values containing '='", () => {
  const input= "equation=x=y+1";
  const currentOutput = parseQueryString(input);
  const targetOutput = {"equation": "x=y+1"};
 
    expect(currentOutput).toEqual(targetOutput);
    
 });


  test("parses multiple key value pairs", () => {
  const input= "name=Alex&age=30";

  const currentOutput = parseQueryString(input);
  const targetOutput = {name: "Alex", age: "30"};
 
    expect(currentOutput).toEqual(targetOutput);
    
 });



