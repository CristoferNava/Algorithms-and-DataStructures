#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v1 = {1, 2, 3, 4, 5};

    for (auto &n : v1) 
        n *= 2;

    for (auto n : v1) 
        cout << n << " ";
}