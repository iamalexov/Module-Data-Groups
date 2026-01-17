function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const numbers = list.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );

  if (numbers.length === 0) return null;

  const temp = [...numbers];
  const middleIndex = Math.floor(temp.length / 2);

  for (let i = 0; i <= middleIndex; i++) {
    let minIndex = i;
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] < temp[minIndex]) {
        minIndex = j;
      }
    }
    const tempVar = temp[i];
    temp[i] = temp[minIndex];
    temp[minIndex] = tempVar;
  }

  if (temp.length % 2 !== 0) {
    return temp[middleIndex];
  } else {
    return (temp[middleIndex - 1] + temp[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;



