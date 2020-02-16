function recursiveFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function iterativeFibonacci(n) {
  
}