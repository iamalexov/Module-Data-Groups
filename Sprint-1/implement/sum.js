const getNumbersOnly = require('./filtering');


function sum(elements) {
    if (!Array.isArray(elements)) return 0;

  const numbers = getNumbersOnly(elements);


  let total = 0;

for (let i = 0; i < numbers.length; i++){
    total+= numbers[i];
}
return total
}

module.exports = sum;
