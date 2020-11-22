#include <iostream>
#include <vector>

using namespace std;

int main() {
    // iterates over each element
    vector<int> v = {1, 2, 3, 4, 5};
    for (auto& x : v)
        x *= 2;

    // a range for is defined in terms of the equivalent traditional for:
    for (auto beg = v.begin(), end = v.end(); beg != end; ++beg) {
        auto& r = *beg;
        r *= 2; 
    }
    // In a range for, the value of end() is cached. If we add elements to 
    // (or remove them from) the sequence, the value end might be invalidated.
}