#include <stdio.h>
#include <math.h>

int main() {
  int n = 100000;
  float pi = 0;

  for (int k = 1; k <= n; k++) {
    pi += 6.0 / pow(k, 2);
  }

  pi = sqrt(pi);
  printf("%.12f", pi);

  printf("\n");
  return 0;
}