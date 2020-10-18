#include <iostream>

using namespace std;

int ans(int n) {
    if (n == 1) return 0;
    if (n == 3) return 2;
    int t = 0;
    while (n > 1) {
        if (n % 6 == 0) n /= 6;
        else if (n % 6 == 3) n *= 2;
        else return -1;
        t++;
    }
    return t;
}

int main() {
    int t;
    cin >> t;

    int n;
    for (int i = 1; i <= t; i++) {
        cin >> n;
        cout << ans(n) << endl;
    }
}