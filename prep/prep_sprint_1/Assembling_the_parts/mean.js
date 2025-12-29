function calculateMean(salaries) {
    let sum = 0;
    for (let i = 0; i < salaries.length; i++) {
        sum = sum + salaries[i];
    }
    return sum/salaries.length
}

module.exports = calculateMean;