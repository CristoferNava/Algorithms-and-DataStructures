// Problema 2.26. Pintar un tablero de ajedrez.

#include <iostream>

using std::cout;
using std::endl;

int main() {
  for (int i = 0; i < 8; i++) {
    
    for (int j = 0; j < 8; j++) {
      if (i % 2 == 0) {
        cout << "* ";
      } else {
        cout << " *";
      }
    }
    cout << endl;
  }
  return 0;
}