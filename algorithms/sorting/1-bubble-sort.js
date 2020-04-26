function bubbleSort(array) {
  let temp;
  for (let times = 1; times < array.length; times++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }

  return array;
}

// In bubble sort we compare the current element (i) with the next one (i+1), and we swap them
const myArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const myArray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(myArray2));