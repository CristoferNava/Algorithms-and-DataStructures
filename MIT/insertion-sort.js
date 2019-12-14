// Insertion-Sort
function insertionSort(array) {
  let key;
  for (let j = 1; j < array.length; j++) {
    key = array[j];
    i = j - 1;
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
  return array;
}

let numbers = [1];
insertionSort(numbers);
console.log(numbers);
