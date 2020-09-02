function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i+1] = key;
  }

  return arr;
}

const input = [5, 2, 4, 6, 1];
console.log(insertionSort(input));