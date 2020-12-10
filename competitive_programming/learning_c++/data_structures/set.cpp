// set is based on a balanced binary tree and its operations work in O(log n)
// unordered_set uses hashing, and its operations work in O(1)
#include <iostream>
#include <set>

using namespace std;

int main() {
    set<int> s;
    s.insert(3);
    s.insert(4);
    s.insert(5);
    s.insert(3);
    s.insert(3);

    cout << s.count(3) << endl;
    s.erase(3); 
    cout << s.count(3) << endl;
    cout << endl;
    // in a set we can't no access the elements using []
    set<int> a = {2, 5, 6, 8};
    cout << a.size() << endl;
    for (auto x : a) {
        cout << x << " ";
    }
}