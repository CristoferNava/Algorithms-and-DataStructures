#include <iostream>
#include <string>
using namespace std;

class Person {
  private:
    string name;

  public:
    void setName(string name) {
      this->name = name;
    }

    string getName() const {
      return this->name;
    }

    void showInfo() const {
      cout << "Hola " << this->getName() << endl;
    }
};

int main() {
  Person cristofer;
  cout << cristofer.getName() << endl;
  cristofer.setName("Cristofer");
  cristofer.showInfo();

}