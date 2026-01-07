const fs = require("fs");


const input = fs.readFileSync("input.txt", "utf8");


const numbers = input
  .toString()
  .split("\n")
  .map(Number);


function sum(e) {
  
  let sum = 0;

for (let i = 0; i < e.length; i++){
    sum+= e[i];
}
return sum
}

console.log(sum(numbers));


