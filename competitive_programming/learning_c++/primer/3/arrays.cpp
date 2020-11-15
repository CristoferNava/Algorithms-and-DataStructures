// we cannot use auto to deduce the type from a list of initializers
// as with vector, arrays hold objects, thus, there are no arrays of references
// int arr[10] :array of 10 ints
// int* parr[5] :array of 5 pointers
#include <iostream>
#include <string>

using namespace std;

int main() {
    // *check constexpr keyword
    const int n = 5; // the dimension must be a constant expression
    const unsigned m = 4;
    constexpr unsigned o = 5;

    int numbers[n] = {1, 2, 3, 4, 5};
    string names[m] = {"cristofer", "damaris", "liz", "dave"};
    int integers[o] = {1, 2, 3, 4, 5};

    // we cannot initialize an array as a copy of another array, nor is it legal
    // to assign one array to another
    // int a[] = {0, 1, 2}; array of 3 ints
    // int a2[] = a; error: cannot initialize one array with another
    // a2 = a; error: cannot assign one array to another
    string* pts[] = {&names[0], &names[1]};
    *pts[0] = "jose"; 
    *pts[1] = "yahel";

    for (auto name : names) {
        cout << name << " ";
    }
}