function iterativeFibonacci(number) {
  let i = 0, j = 1, result = 0;
  if (number === 1) {return 1}

  for (let times = 2; times <= number; times++) {
    result = i + j;
    i = j;
    j = result;
  }

  return result;
}

function recursiveFibonacci(number) {
  if (number === 0) {return 0;}
  if (number === 1) {return 1;}

  return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
}