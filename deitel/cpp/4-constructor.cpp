#include <iostream>
#include <string>
using namespace std;

class Person {
  private:
    string personName;

  public:
    explicit Person(string name) : personName (name) {
    }

    void setName(string name) {
      personName = name;
    }

    string getName() {
      return personName;
    }

    void showInfo() {
      cout << getName() << endl;
    }
};

int main() {
  Person cristofer("Cristofer");
  cristofer.showInfo();
}