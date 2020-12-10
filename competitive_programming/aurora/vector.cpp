#include <iostream>
#include <vector>

using namespace std;
//         v
// [-------a---------]
//             x
// [[1, 2, 3, 4, 5-----]]

// iteradores
void printVector(vector<int>& v) {
    for (int &x : v) {
        cout << x << endl;
    }
}

int main() {
    vector<int> a = {1, 2, 3, 4, 5};
    printVector(a);
}