// Problema 2.23. Recibir cinco enteros y determinar el mayor y el menor.

function lowerAndGreater(array) {
  let lower = array[0];
  let grater = array[0];
  let result = [];

  for (number of array) {
    if (number < lower) {
      lower = number;
    }
    if (number > grater) {
      grater = number;
    }
  }

  result.push(lower);
  result.push(grater);

  return result;
}

let numbers = [23, 1, 6, 7, 12];

console.log(lowerAndGreater(numbers));