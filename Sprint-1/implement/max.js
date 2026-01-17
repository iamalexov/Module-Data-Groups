function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  const numbers = elements.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );
    if (numbers.length === 0) return null;

     let max = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max

}

module.exports = findMax;
