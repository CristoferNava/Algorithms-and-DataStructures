// Binary Search using iterators
#include <iostream>
#include <vector>

using namespace std;

// Returns true if the element is found, otherwise returns false
bool binarySearch(vector<int>& v, int target) {
    auto l = v.begin();
    auto r = v.end() - 1;

    while (l <= r) {
        auto middle = l + (r - l) / 2; // r - l is the distance between the iterators
        // cout << (*middle) << endl;
        if (target == *middle) return true;
        else if (target < *middle) r = middle - 1;
        else l = middle + 1;
    }
    return false;
}

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    for (auto x : v) {
        cout << (binarySearch(v, x)) << endl;
    }
    cout << (binarySearch(v, 15)) << endl;
}