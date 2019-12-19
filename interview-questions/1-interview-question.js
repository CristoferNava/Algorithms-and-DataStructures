// Given two arrays, create a function that let's the user know (true/false) 
// wether these two arrays contain any common items.

function commonItems(array1, array2) {
  for (element1 of array1) {
    for (element2 of array2) {
      if (element1 === element2) {
        return true;
      }
    }
  }

  return false;
}

let items1 = ['a', 'b', 'c', 'x'];
let items2 = ['z', 'y', 'i'];
let items3 = ['z', 'y', 'x'];

console.log(commonItems(items1, items2));
console.log(commonItems(items1, items3));