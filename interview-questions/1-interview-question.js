// Given two arrays, create a function that let's the user know (true/false) 
// wether these two arrays contain any common items.

// function commonItems(array1, array2) {
//   for (element1 of array1) {
//     for (element2 of array2) {
//       if (element1 === element2) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// let items1 = ['a', 'b', 'c', 'x'];
// let items2 = ['z', 'y', 'i'];

// console.log(commonItems(items1, items2));
// O(a * b)

// We can do it better!
let items1 = ['a', 'b', 'c', 'x'];
let items2 = ['z', 'y', 'i'];

function containsItems(arr1, arr2) {
  let map = {};
  for (value of arr1) {
    if (!map[value]) {
      const element = value;
      map[element] = true;
    } 
  }

  for (value of arr2) {
    if (map[value]) {
      return true;
    }
  }

  return false;
}
// O (a + b)