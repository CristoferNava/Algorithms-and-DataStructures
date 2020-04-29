function sum(n) {
  if (n <= 0) {
    return 0;
  }

  return n + sum(n - 1);
}

// time: O(n)
// space: 0(n)
console.log(sum(4));