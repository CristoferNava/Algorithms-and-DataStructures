function test(n) {
  if (n === 0) {
    return 0;
  }
  return n + test(n - 1);
}

function testIterative(n) {
  let sum = 0;

  for (let i = n; i >= 0; i--) {
    sum += i;
  }

  return sum;
}

console.log(testIterative(5));

