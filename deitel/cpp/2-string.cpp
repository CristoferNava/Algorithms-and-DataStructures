#include <iostream>
#include <string>
using namespace std;

class Person {
  public:
    void showInfo(string name) const {
      cout << "Hola " << name << "!" << endl;
    }
};

int main() {
  string name;
  cout << "Introduce tu nombre: ";
  getline(cin, name);

  Person cristofer;
  cristofer.showInfo(name);
}

// se usa getline en lugar de cin porque este último lee hasta encontrar un 
// espacio en blanco