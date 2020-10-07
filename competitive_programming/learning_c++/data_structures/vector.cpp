#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);
    v.push_back(4);

    for (auto x : v) {
        cout << x << "\n";
    }

    // the method back return the last element in the vector
    cout << v.back() << endl;
    v.pop_back(); // removes the last element
    cout << v.back() << endl;

    vector<int> a = {1, 5, 3, 6}; // creates a vector of 4 elements

    cout << endl;
    // create a vector of 10 elements where each element is 5
    vector<int> test(10, 5);
    for (auto x : test) {
        cout << x << " ";
    }
}