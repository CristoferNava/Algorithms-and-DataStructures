// When we use the name of an array, we are really using a pointer to the first
// element in that array.
#include <iostream>

using namespace std;

int main() {
    int a[] = {0, 2, 4, 6, 8};
    // if we use a[0], that is an expression that uses the name of an array.
    // When we subscript an array, we are really subscripting a pointer to an 
    // element in that array:
    int i = a[2]; // a is converted to a pointer to the first element in a
                  // a[2] fetches the element to which (a + 2) points

    int *p = a; // p points to the first element in a
    i = *(p + 2); // equivalent to i = a[2]

    int *pt = &a[2]; // pt points to the element indexed by 2
    int j = pt[1]; // is equivalent to *(pt + 1)
                   // pt[1] is the same element as a[3];
    int k = pt[-2]; // pt[-2] is the same element as a[0]
    // unlike subscripts for vector and string, the index of the built-in 
    // subscript operator is not an unsigned type.

    cout << j << " " << k << endl;
}