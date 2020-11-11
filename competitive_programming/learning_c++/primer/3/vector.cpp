#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v1 = {1, 2, 3, 4};
    vector<int> v2(v1); // copy elements of v1 into v2
    vector<int> v3 = v1; // copy elements of v1 into v3

    for (auto n : v3) 
        cout << n << " ";
    cout << endl;

    vector<int> v4 = {5, 6, 7, 8};
    v4 = v1;
    for (auto n : v4)
        cout << n << " ";
    cout << endl;

    // creating a specified number of elements
    vector<int> v5(10, 1); // 10 elements, each initialized to 0
    for (auto n : v5)
        cout << n << " ";
    cout << endl;

    vector<int> v6(10); // 10 elementst with value 0
    vector<int> v7{10}; // 1 element with value 10
    vector<int> v8(10, 1); // 10 elements with value 1
    vector<int> v9{10, 1}; // 2 elementst, 10 and 1
}