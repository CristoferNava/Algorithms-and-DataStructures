function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

function iterativeFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  return factorial;
}