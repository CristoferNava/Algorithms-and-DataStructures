let numbers = [-2, 11, -4, 13, -5, 2];

function maxSubsequenceSum(arr) {
  let maxSum = 0;
  let start, end;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum > maxSum) {
        maxSum = sum;
        start = i;
        end = j;
      }
    }
  }

  return {
    maxSum: maxSum,
    sequence: [start, end]
  };
}