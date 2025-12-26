
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}

console.log(calculateMedian([1, 2, 3])); // 2
console.log(calculateMedian([10, 20, 30, 40, 50, 60, 70, 90])); // 30

module.exports = calculateMedian;


// This function finds the median of a list of numbers.
// The median is the number in the middle of the list.

// the function It takes one parameter: list (an array of numbers)

// [1, 2, 3].length ( 3 )  This gives us how many items are in the array

// (list.length / 2) divide the length by 2 to find the middle position

// Math.floor rounds a number down:
// const middleIndex = Math.floor(list.length / 2);

// splice removes items from an array
// Here it removes one element from the middle:
// const median = list.splice(middleIndex, 1)[0];



/* 
function calculateMedian(list) {
  let middleIndex = Math.floor(list.length / 2);
  let median;

  for (let i = 0; i < list.length; i++) {
    if (i === middleIndex) {
      median = list[i];
    }
  }

  return median;
}

console.log(calculateMedian([1, 2, 3]));          // 2
console.log(calculateMedian([10, 20, 30, 40, 50])); // 30

module.exports = calculateMedian;
*/



