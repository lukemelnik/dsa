let array = [1, 2, -10, 3, 4, -20, 1, 2, -1, 3, 4, -10];
let endArray = [1, 2, 3, -10, -10, 20, 20];

function kadanesWithSubarray(array) {
  let maxSum = array[0];
  let currSum = 0;
  let subarray;
  let start = 0;
  let end = 0;
  for (let i = 0; i < array.length; i++) {
    if (currSum <= 0) {
      currSum = array[i];
      start = i;
    } else {
      currSum += array[i];
      end = i;
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      subarray = array.slice(start, end + 1);
    }
  }
  return { maxSum, subarray };
}

console.log(kadanesWithSubarray(array));
console.log(kadanesWithSubarray(endArray));
