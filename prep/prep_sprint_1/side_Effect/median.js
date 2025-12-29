function calculateMedian(list) {
    // We divide the length by 2 and use Math.floor to get a whole number:
    // [10, 20, 30, 40, 50, 60, 80, 100]
    const middleIndex = Math.floor(list.length/2);
    // Because the array length is even, we take two middle values:
    if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;  // list[middleIndex - 1] // 40
    }                                                //list[middleIndex]  50
  

    
    const median = list[middleIndex];
    return median
}

module.exports = calculateMedian;


//Summary:
// list.length / 2 gives the right middle index
// Index 4 points to value 50
// For even-length arrays, median is between two numbers, not just one
