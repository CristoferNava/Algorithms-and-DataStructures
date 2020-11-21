// *iter :returns a reference to the element denoted by the iterator iter.
// iter->mem :dereferences iter and fetches the member named mem from the underlying
// element. Equivalent to (*iter).mem.
// iter++ :increments iter to refer to the next element in the container
// iter-- :decrements iter to refer to the previous element in the container.
// iter1 == iter2, iter1 != iter2 :compares two iterators for equality (inequality).
// Two iterators are equal if theyn denote the same element or if they are the 
// off-the-end iterator for the same container.
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s = "cristofer";
    if (s.begin() != s.end()) { // make sure s is not empty
        auto first = s.begin(); // first denotes the first character in s
        *first = toupper(*first);
    }

    cout << s << endl;

    // Because the iterator returned from end does not denote an element, it may
    // not be incremented or dereferenced
    string s1 = "cristofer nava";
    for (auto c = s1.begin(); c != s1.end() && !isspace(*c); c++) {
        *c = toupper(*c);
    }
    cout << s1 << endl;

    // iterator types:
    vector<int>::iterator it; // it can read and write vector<int> elements;
    string::iterator it2; // it can read and write characters in a string;
    vector<int>::const_iterator it3; // it can read but not write elements
    string::const_iterator it4; // it can read but no write characters.

    // const and not-const
    vector<int> v;
    const vector<int> cv;
    auto it1 = v.begin(); // it1 has type vector<int>::iterator
    auto it2 = cv.begin(); // it2 has type vector<int>::const_iterator

    // if we want to use a const iterator a better way
    auto it3 = v.cbegin(); // it3 has type vector<int>::const_iterator
}