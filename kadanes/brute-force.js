// brute force O(n^2)

function bruteForce(array) {
  let max = -Infinity;
  let subarray;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum > max) {
        subarray = array.slice(i, j + 1);
        max = sum;
      }
    }
  }
  return { max, subarray };
}
