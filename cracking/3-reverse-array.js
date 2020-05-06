function reverseArray(arr) {
  let temp;
  for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

const arr1 = [5, 4, 3, 2, 1];
const arr2 = [6, 5, 4, 3, 2, 1];

console.log(reverseArray(arr1));
console.log(reverseArray(arr2));