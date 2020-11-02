// both pointers and references give indirect access to other objects
// a references is not an object, once we have defined a reference, there is no
// way to make that reference refer to a different object.

#include <iostream>

using namespace std;

int main() {
    // some pointer operations, if the pointer is 0 (nullptr) then the condition
    // is false
    int i = 0;
    int* p = &i;

    if (p) 
        cout << "valid pointer" << endl;
    else
        cout << "invalid pointer" << endl;

    int* p2 = nullptr; // a null pointer does not point to any object

    if (p2) 
        cout << "valid pointer" << endl;
    else
        cout << "invalid pointer" << endl;
    
    // two pointers are equal if they hold the same address and unequal otherwise
    // we can use == and !=
}