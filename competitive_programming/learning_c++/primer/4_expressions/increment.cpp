#include <iostream>
#include <vector>

using namespace std;

int main() {
    int i1 = 0, i2 = 0, j, k;
    j = ++i1; // increments its operand and yields the changed object as its result
    k = i2++; // increments its operand but yield a copy of the original, unchanged value as its result

    cout << j << " " << k << endl;

    // the postfix are used when we want to use the current value of a variable and increment
    // it in a single compound expression.
    vector<int> v = {1, 2, 3, 4, 5};
    auto b = v.begin();

    // print all the values in the vector
    while (b != v.end()) {
        cout << *b++ << " "; // print the current value and advance b
    }                        // the precedence of ++ postfix is higher than *   
    // this is equivalent to *(b++)
}