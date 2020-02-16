// Selection Sort
// Exercise 2.2-2

function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length - 1; i++) {
    min = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = min;
  }

  return array;
}