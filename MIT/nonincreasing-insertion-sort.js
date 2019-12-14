// Nonincreasing insertion-sort

function insertionSort(array) {
  let key;
  for (let j = 0; j < array.length; j++) {
    key = array[j];
    i = j - 1;
    while (i >= 0 && key > array[i]) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
  return array;
}