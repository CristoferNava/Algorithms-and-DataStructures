// consider the problem of generating all subsets of a set of n elements.
// for the set (0, 1, 2) all the subsets are:
// (), (0), (1), (2), (0, 1), (0, 2), (1, 2), (0, 1, 2)

#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {0, 1, 2, 3, 4, 5};

    // empty set and set with n elements 
    cout << "{ }" << endl;
    for (auto x : v) cout << x << " ";
    cout << endl;

    // sets with each element
    for (auto x : v) cout << x << endl;

    // all the combinatios remaind
    for (int i = 0; i < v.size() - 1; i++) {
        for (int j = i + 1; j < v.size(); j++) {
            cout << v[i] << " " << v[j] << endl;
        }
    }
}