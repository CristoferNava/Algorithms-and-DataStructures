function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // split the array into rigth and left
  const length = arr.length;
  const middle = Math.trunc(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr1 = [4, 3, 2, 1];
const arr2 = [-5, 4, 3, 2, 1];
const arr3 = [2, 8, 5, 3, 9, 4, 1, 7];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));