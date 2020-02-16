let elements = [];

function sameIndexElement(arr, pos, ele) {
  if (arr.length !== pos) {
    if (arr[pos] === pos) {
      elements.push(pos);
    }
    sameIndexElement(arr, pos + 1);
  }
}

let array = [12, 3, 2, 5, 11, 23, 6];
sameIndexElement(array, 0);
console.log(elements);