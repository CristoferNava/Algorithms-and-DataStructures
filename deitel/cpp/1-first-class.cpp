#include <iostream>
using namespace std;

class Person {
  public:
  void showMessage() const {
    cout << "Información de prueba" << endl;
  }
};

int main() {
  Person cristofer;
  cristofer.showMessage();
}

// const hace que la función no pueda modificar el objeto que la llama