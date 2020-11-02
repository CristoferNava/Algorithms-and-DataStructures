// A pointer is an object in memory, so it has and address.
// Therefore, we can store the address of a pointer in another pointer.

#include <iostream>

using namespace std;

int main() {
    int i = 12; 
    int* p1 = &i; // p1 points to an int
    int** p2 = &p1; // p2 points to a pointer p1 to points an int

    cout << **p2 << endl;

    cout << &p1 << endl;
    cout << p2 << endl;
}