#include <iostream>
#include <string>

using namespace std;

int main() {
    int t;
    cin >> t;

    int h, n, m; 
    for (int i = 1; i <= t; i++) {
        cin >> h >> n >> m;
        while (n > 0 && h > 20) {
            if (h <= 0) break;
            h = h / 2 + 10;
            n--;
        }
        while (m > 0) {
            h -= 10;
            m--;
        }
        if (h <= 0) cout << "YES" << "\n";
        else cout << "NO" << "\n";
    }
}