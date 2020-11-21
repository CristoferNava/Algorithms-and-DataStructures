#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<vector<int>> m1 = {{1, 2, 3}, 
                              {4, 5, 6},
                              {7, 8, 9},};

    for (int i = 0; i < m1.size(); i++) {
        for (int j = 0; j < m1[i].size(); j++) {
            cout << m1[i][j] << " ";
        }
        cout << endl;
    }    

    for (auto v : m1) {
        for (auto n : v) {
            cout << n << " ";
        }
        cout << endl;
    }                
}