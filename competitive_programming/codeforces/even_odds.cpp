#include <iostream>
#include <cmath>

using namespace std;

int main() {
    long long int n, k;
    cin >> n >> k;

    if (k <= (long long int)ceil((long double)n / 2)) {
        long long int j = 1;
        long long int odd = 1;
        while (j < k) {
            odd += 2;
            j++;
        }
        cout << odd << endl;
    } else {
        k -= (long long int)ceil((long double)n / 2);
        long long int j = 1;
        long long int even = 2;
        while (j < k) {
            even += 2;
            j++;
        }
        cout << even << endl;
    }
    // 8 5 -> 2
    // 1 3 5 7 2 4 6 8
}