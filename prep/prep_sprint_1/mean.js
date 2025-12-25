function calculateMean(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
}
return sum/list.length;
}


module.exports = calculateMean;
