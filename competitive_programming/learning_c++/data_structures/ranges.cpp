// an iterator is a variable that points to an element in a data structure
// the iterator begin points to the first element and the end iterator points
// the position after the last element
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {5, 3, 1, 3, 5};
    sort(v.begin(), v.end());

    for (auto x : v) {
        cout << x << " ";
    }
    cout << endl;

    reverse(v.begin(), v.end());
    for (auto x : v) {
        cout << x << " ";
    }
    cout << endl;
    
    // sorting a static array
    int a[] = {5, 3, 2, 1, 7};
    int n = sizeof(a) / sizeof(a[0]);
    sort(a, a+n);
    for (auto x : a) {
        cout << x << " ";
    }
    cout << endl;

    reverse(a, a+n);
    for (auto x : a) {
        cout << x << " ";
    }
}