# Kadane's Algorithm

You could brute force it for an 0(n^2) - in this case I also set it up to deliver the actual subarray:

```js
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
```

But Kadane's manages to make it 0(n) by letting each new entry of the array see the sum of previous values as either positive or negative. Then it only has to decide whether to keep adding to the sum (if it's positive) or start over (if the previous sum was negative).

```js
unction kadanes(array) {
  let maxSum = array[0];
  let currSum = 0;
  for (number of array) {
    currSum < 0 && (currSum = 0);
    currSum += number;
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}
```

And then you can return the subarray like this:

```js
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
```
