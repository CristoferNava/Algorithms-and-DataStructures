function equalsArrays(arr1, arr2, pos, equals) {
  if (pos < arr1.length) {
    if (arr1[pos] !== arr2[pos]) {
      equals = false;
    }
    return equalsArrays(arr1, arr2, pos + 1, equals);
  }

  return equals;
}

let array1 = [1, 2, 3, 5, 8];
let array2 = [1, 2, 3, 5, 3];

// 
console.log(equalsArrays(array1, array2, 0, true));