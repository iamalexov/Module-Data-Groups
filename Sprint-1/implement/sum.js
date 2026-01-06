function sum(elements) {
    if (!Array.isArray(elements)) return 0;

  const num = elements.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );

  let sum = 0;

for (let i = 0; i < num.length; i++){
    sum+= num[i];
}
return sum
}

module.exports = sum;
