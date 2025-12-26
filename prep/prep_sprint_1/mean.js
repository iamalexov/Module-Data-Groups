function calculateMean(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
}
return sum/list.length;
}
console.log(calculateMean([3, 50, 7]));

module.exports = calculateMean;
