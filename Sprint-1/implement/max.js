function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  const num = elements.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );
    if (num.length === 0) return -Infinity;

     let max = num[0]
    for(let i = 0; i < num.length; i++){
        if (num[i] > max) {
            max = num[i]
        }
    }
    return max

}

module.exports = findMax;
