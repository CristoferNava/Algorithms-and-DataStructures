function maxValue(arr, pos, max) {
  if (pos !== arr.length) {
    if (arr[pos + 1] > max) {
      max = arr[pos + 1];
    }
    maxValue(arr, pos + 1, max);
  } else {
    console.log(max);
  }
}

let arr = [5, 4, 7, 1, 3, 8, -2];

maxValue(arr, 0, arr[0]);