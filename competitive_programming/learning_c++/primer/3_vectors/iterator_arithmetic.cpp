// Operations supported by vector and string iterators
// iter + n 
// iter - n :Adding (subtracting) an integral value n to (from) an iterator yields
// an iterator that many elements forward (backward) within the container. The
// resulting iterator must denote elements in, or one past the end of, the same container.

// iter1 += n
// iter2 -= n :Compound-assignment for iterator addition and subtraction.
// Assigns to iter1 the value of adding n to, or subtracting n from, iter1.

// iter1 - iter2 :Subtracting two iterators yields the number that when added to the 
// right-hand iterator yields the left-hand iterator. The iterators must denote
// elements in, or one past the end of, the same container.

// >, >=, <, <= :Relational operators on iterators. One iterator is less than another
// if it refers to an element that appears in the container before the one referred 
// to by the other iterator. The iterators must denote elements in, or one past the 
// end of, the same container.

#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {12, 23, 44, 75, 84};
    auto it = v.begin();
    it += 2;
    cout << (*it) << endl;

    auto middle = v.begin() + v.size() / 2;
    cout << (*middle) << endl;
}