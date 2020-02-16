function pi(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += ((-1)**i) / (2*i + 1);
  }

  return sum * 4;
}

console.log(pi(1000000));