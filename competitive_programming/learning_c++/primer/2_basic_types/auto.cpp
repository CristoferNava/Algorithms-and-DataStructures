// we can use auto to let the compiler determine the type of an expression
// for obvious reasons a variable that uses auto as its type specifier must have 
// an initializer
#include <iostream>

using namespace std;

int main() {
    auto age = 22;
    auto name = "Cristofer";
    auto price = 12.3;

    cout << age << " " << name << " " << price << endl;
}


