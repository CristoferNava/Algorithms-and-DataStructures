function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length; i++) {
    min = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        pos = j;
      }
    }
    array[pos] = array[i];
    array[i] = min;
    
  }
  console.log(array);
  return array;
}

const myArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const myArray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

selectionSort(myArray2);