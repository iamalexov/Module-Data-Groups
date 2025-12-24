function mean (num) {
    let result = 0;
    for(i=0; i<num.length; i++ ) {
    result = result + num[i]; // result contains the sum of all numbers in the array
    }
    result = result/num.length; // To calculate the mean (average), the total sum is divided by the number of elements in the array (num.length)

    return result

}

module.exports = mean;



