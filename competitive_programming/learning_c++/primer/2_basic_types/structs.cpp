#include <iostream>
#include "person.h"

using namespace std;

int main() {
    Person cristofer;
    cristofer.firstName = "Cristofer";
    cristofer.lastName = "Nava";
    cristofer.age = 22;

    cout << cristofer.firstName << endl;
    cout << cristofer.lastName << endl;
    cout << cristofer.age << endl;
}