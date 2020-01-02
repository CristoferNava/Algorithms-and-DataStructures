// Given an array arr[] of n elements, write a function to search a given 
// element x in arr[]

function search(arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let x = 175;
let n = arr.length;

let result = search(arr, n, x);
console.log(result);