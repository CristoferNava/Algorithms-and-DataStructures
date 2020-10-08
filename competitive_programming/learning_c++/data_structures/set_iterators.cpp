// iterators are often used to access elements of a set
#include <iostream>
#include <set>

using namespace std;

int main() {
    set<int> s = {3, 5, 2, 1, 4};
    // creates an iterator itl that points to the smallest element in a set
    set<int>::iterator itl = s.begin();
    // cout << *itl << endl;

    // a better way to create an iterator is
    auto it = s.begin();
    cout << *it << endl;
    // iterators can be moved using the operators ++(forward) and --(backward)
    // meaning that the iterator moves to next or previous element in the set
    it++;
    cout << *it << endl;

    // the elements in a set are ordered
    for (auto x : s) {
        cout << x << " ";
    }
    cout << endl;

    // printing all the elements in the set using an iterator
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " ";
    } 
    cout << endl;
    
    // printing the largest element in a set
    auto largest = s.end();
    largest--;
    cout << *largest << endl;
}