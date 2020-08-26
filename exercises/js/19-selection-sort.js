// Selection Sort
// Exercise 2.2-2
// Bug unfixed
function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length - 1; i++) {
    min = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = min;
  }

  return array;
}

const myArray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(selectionSort(myArray2));