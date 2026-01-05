function doubleAllNumbers(numbers) {
  let doubledNumbers = []

  for (let n of numbers) {
    const newValue = n * 2
    doubledNumbers.push(newValue);
  }

  return doubledNumbers;
}

const myNums = [10, 20, 30];
const newArray = doubleAllNumbers(myNums);

const petersArray = [5, 6, 7, 8]
const petersResult = doubleAllNumbers(petersArray)

console.log(newArray)
console.log(petersResult)
