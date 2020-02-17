function estimatePi(n, i, sum) {
  if (i < n) {
    sum += ((-1)**i) / (2*i + 1);
    return estimatePi(n, i + 1, sum);
  }

  return sum * 4;
}