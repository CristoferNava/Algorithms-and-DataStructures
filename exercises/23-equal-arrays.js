let equals = true;

function equalArrays(arr1, arr2, pos) {
  if (pos !== arr1.length) {
    console.log(`${arr1[pos]} ${arr2[pos]}`);
    if (arr1[pos] !== arr2[pos]) {
      equals = false;
    }
    equalArrays(arr1, arr2, pos + 1);
  } else {
    console.log(equals);
  }
}

let array1 = [2, 32, 12, 1, 0];
let array2 = [24, 12, 11, 4, 5];
let array3 = [2, 32, 12, 1, 0];
equalArrays(array1, array3, 0);