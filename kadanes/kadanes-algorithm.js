// Kadanes algorithm -
// Every new entry sees the sum before it as either positive or negative
// if the previous sum is negative, it starts the count over (i.e currSum is set to zero)

let array = [1, 2, -10, 3, 4, -20, 1, 2, -1, 3, 4, -10];
let endArray = [1, 2, 3, -10, -10, 20, 20];

function kadanes(array) {
  let maxSum = array[0];
  let currSum = 0;
  for (number of array) {
    currSum < 0 && (currSum = 0);
    currSum += number;
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(kadanes(array));
console.log(kadanes(endArray));
