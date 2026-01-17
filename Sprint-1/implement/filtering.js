function getNumbersOnly(arr) {
  if (!Array.isArray(arr)) return [];

  return arr.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );
}


module.exports = getNumbersOnly;
