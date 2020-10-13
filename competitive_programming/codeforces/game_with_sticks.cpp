#include <iostream>

using namespace std;

int main() {
    int n, m; 
    cin >> n >> m;

    int k = min(n, m) - 1;

    if (k % 2 == 0) cout << "Akshat" << endl;
    else cout << "Malvika" << endl;
}