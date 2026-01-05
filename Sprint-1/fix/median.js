// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

/* function calculateMedian(list) {

  if (!Array.isArray(list))
    return null;


  const num = list.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );

  if (num.length === 0) { 

    return null;
  }


  const temp = [...num];

for (let i = 0; i <= middleIndex; i++) {
  let minIndex = i;
  for (let j = i+1; j < temp.length; j++) {
    if (temp[j] < temp[minIndex]) minIndex = j;
  }
}
 const tempVar = temp[i]
 temp[i] = temp[minIndex]
 temp[minIndex] = tempVar
  


 


const middleIndex = Math.floor(temp.length / 2);
  if (temp.length % 2 !== 0) {
    return temp[middleIndex];
  } else {
    return (temp[middleIndex - 1] + temp[middleIndex]) / 2;  // list[middleIndex - 1] // 40
    }                                                //list[middleIndex]  50
} */



function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const num = list.filter(
    item => typeof item === 'number' && !Number.isNaN(item)
  );

  if (num.length === 0) return null;

  const temp = [...num];
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



