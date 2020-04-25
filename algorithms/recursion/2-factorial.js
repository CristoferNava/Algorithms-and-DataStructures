function iterativeFactorial (number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

function recursiveFactorial (number) {
  if (number in [0, 1]) {
    return 1;
  }

  return number * recursiveFactorial(number - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));