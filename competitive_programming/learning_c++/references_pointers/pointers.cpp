// a pointer is a compound type that "points to" another type
// like references, pointers are used for indirect access to other objects.
// Unlike a reference, a pointer is an object on its own right.

#include <iostream>

using namespace std;

int main() {
    int *p1, *p2; // both are pointers to int
    double dp, *dp2; // dp2 is a pointer to double, dp is a double
    // a pointer holds the address of another object 
    // & address-of operator
    int val = 42;
    int *p = &val; // p holds the address of val, p is a pointer to val
    // because references are not objects, they don't have address. Hence, 
    // we may not define a pointer to a reference.

    // when a pointer points to an object, we can use the dereference operator: *
    // to access that object
    cout << p << endl;
    cout << &val << endl;
    cout << *p << endl; // yields the object to which p points
    // dereferencing a pointer yields the object which the pointer points
    *p = 0;
    cout << val << endl;

    // A pointer is just a variable that holds the address from an object
    string name = "Cristofer";
    string *pName = &name;
    cout << pName  << endl;
    cout << &name << endl;
}