function calculateMedian(salaries) { 
  const middleIndex = Math.floor(salaries.length/2);
  return salaries [middleIndex];
}

module.exports = calculateMedian;