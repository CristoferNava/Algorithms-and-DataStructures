// Exercise 1.
function sum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n - 1);
}

// Time complexity: O(n)
// Space complexity: O(n)