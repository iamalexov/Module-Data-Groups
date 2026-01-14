/* 
function parseQueryString() {
  return {};
}
 */
/*  */



/* function parseQueryString(queryString) {
  const queryParams = {};

  const keyValuePair = queryString.split("=");
  const key = keyValuePair[0]; // key will hold 'fruit'
  const value = keyValuePair[1]; // value will hold 'banana'
  queryParams.key = value;

  return queryParams;
} */

/* function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams[key] = value;

  return queryParams;
} */


  function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}

test("given a query string with no query parameters, returns an empty object", function () {
  const input = "";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});


test("given a query string with one pair of query params, returns them in object form", function () {
  const input = "fruit=banana";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "banana" };

  expect(currentOutput).toEqual(targetOutput);
}); 