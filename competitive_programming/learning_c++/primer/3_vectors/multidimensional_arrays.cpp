// Strictly, there are not multidimensional arrays in C++, they are arrays of arrays
// int a[3][4] :array of size 3; each element is an array of ints of size 4
// int arr[10][20][30] = {0} :array of size 10; each element is a 20-element array
// whose elements are arrays of 30 ints, all the elements are initialized to 0

#include <iostream>

using namespace std;

int main() {
    // When we define a pointer to a multidimensional array, is converted to a 
    // pointer to the first element 
    //int ia[3][4]; // array of size 3; each element is an array of ints of size 4
    //int (*p)[4] = ia; // p points to an array of four ints
    //p = &ia[2]; // p now points to the last element in ia

    // beware of the syntax
    // int *p[4]; array of 4 pointers to int
    // int (*p)[4]; pointer to an array of 4 ints

    int ia[3][4] = {
        {1, 2, 3, 9},
        {4, 5, 6, 8},
        {7, 8, 9, 7}
    };

    // p points to an array of four ints
    for (int (*p)[4] = ia; p != ia + 3; p++) {
        // q points to the first element of an array of four ints, that is, 
        // q points to an int
        for (int *q = *p; q != *p + 4; q++) {
            cout << *q << " ";
        }
        cout << endl;
    }
    cout << endl;

    // a cleaner way:
    // p points to the first array in ia
    for (auto p = begin(ia); p != end(ia); p++) {
        // q points to the first element in an inner array
        for (auto q = begin(*p); q != end(*p); q++) {
            cout << *q << " ";
        }
        cout << endl;
    }
}