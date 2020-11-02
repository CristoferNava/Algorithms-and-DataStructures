// A reference is not an object. Hence, we may not have a pointer to a reference.
// However, because a pointer is an object, we can define a reference to a pointer.

#include <iostream>

using namespace std;

int main() {
    int i = 42;
    int* p; // p is a pointer to int
    int*& r = p; // r is reference to a pointer

    r = &i;
    *r = 29;

    cout << i << endl; 
}