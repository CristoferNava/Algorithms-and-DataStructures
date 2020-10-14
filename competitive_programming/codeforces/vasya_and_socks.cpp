#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    
    int i = 1; // counter of days
    while (true) {
        n--;
        if (i % m == 0) n++;
        if (n == 0) break;
        i++;
    }

    cout << i << endl;
}