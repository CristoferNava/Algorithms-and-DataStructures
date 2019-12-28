#include <iostream>

using std::cout;
using std::cin;
using std::endl;

int main() {
  int numbers[5];
  int lower, greater;

  for (int i = 0; i < 5; i++) {
    cout << "Introduce un entero: ";
    cin >> numbers[i];
  }

  lower = numbers[0];
  greater = numbers[0];

  for (int i = 0; i < 5; i++) {
    if (numbers[i] < lower) {
      lower = numbers[i];
    }

    if (numbers[i] > greater) {
      greater = numbers[i];
    }
  }

  cout << "El entero menor es: " << lower << endl;
  cout << "El entero mayor es: " << greater << endl;

  return 0;
}