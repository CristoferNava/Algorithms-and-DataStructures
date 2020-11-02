// the type void* is a special pointer type that can hold the address of any object
// like any other pointer a void* pointer holds the memory address of a object 
// but the type of the object at that address is unknown.
#include <iostream>

using namespace std;

int main() {
    int i = 22;
    void* p = &i;

    // we cannot use a void* pointer to operate over the object it holds
    cout << p << " " << *p << endl;
}
