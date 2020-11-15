// Like pointers, iterators give us indirect access to an object.
// In the case of an iterator, that object is an element in a container or a character
// in a string. We can use an iterator to fetch an element and iterators have operations
// to move from one element to another. As with pointers, an iterator may be valid
// or invalid. A valid iterator either denotes an element or denotes a position
// one past the last element in a container. All other iterator values are invalid.
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {12, 11, 23, 74};
    auto b = v.begin(); // returns an iterator
    auto e = v.end();
    // Dereferencing an invalid iterator or an off-the-end iterator has undefined behavior
    cout << *b << " " << *e << endl;
    // if the container is empty begin and end returns the same iterator
}