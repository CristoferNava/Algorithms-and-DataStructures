#include <iostream>

using namespace std;

int main() {
    long long int n;
    cin >> n;

    int digits = 0; // count the number of lucky digits

    while (n > 0) {
        if (n % 10 == 4 || n % 10 == 7) digits++;
        n /= 10;
    }

    if (digits == 4 || digits == 7) cout << "YES" << endl;
    else cout << "NO" << endl;
}