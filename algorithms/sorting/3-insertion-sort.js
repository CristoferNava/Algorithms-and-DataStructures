function insertionSort(arr) {
  let key, i;
  for (let j = 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i+1] = arr[i];
      i = i - 1;
    }
    arr[i+1] = key;
  }

  return arr;
}

const arr1 = [4, 2, 1, 12, 0];
const arr2 = [5, 4, 3, 2, 1];

console.log(insertionSort(arr2));