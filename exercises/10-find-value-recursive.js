function findValue(arr, pos, target, index) {
  if (pos !== arr.length) {
    if (target === arr[pos]) {
      index = pos;
    }
    findValue(arr, pos + 1, target, index);
  } else {
    console.log(index);
  }
}

let numbers = [2, 7, 8, 4, 3];
findValue(numbers, 0, 9, -1);