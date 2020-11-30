// We can write a function that takes an unknown number of arguments of a single
// type using an initilizer_list parameter.
// An initializer_list is library type that represents an array of values of the
// specified type.
#include <iostream>
#include <initializer_list>

using namespace std;

int maxNumber(initializer_list<int>);

int main() {
    // Unlike vectors, the elements in an initializer_list are always const values
    // there is no way to change the value of an element in an initializer_list
    int maxValue = maxNumber({1, 2, 3, 4});
    cout << maxValue << endl;
}

int maxNumber(initializer_list<int> lst) {
    int max = *(lst.begin());

    for (auto ptr = lst.begin(); ptr != lst.end(); ++ptr) {
        if (*ptr > max) 
            max = *ptr;
    }
    return max;

    // we can also traverse using a for range
    // for (const auto &element : lst) 
    //     cout << element << " ";
}

// Operations on initializer_list
// initializer_list<T> lst; Default initialization; an empty list of elements of type T

// initilizer_list<T> lst{a, b, c, d}; lst has many elements as there initializers
// elements are copies of the corresponding initializers. Elements in the list are const.

// lst2(lst) or lst2 = lst Copying or assigning an initializer_list does not copy elements 

// lst.size()
// lst.begin(), lst.end() returns a pointer to the first and one past the last element in lst.