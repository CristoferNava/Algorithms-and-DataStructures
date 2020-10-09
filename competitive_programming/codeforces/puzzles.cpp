#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int a[m];
    // get the numbers
    for (int i = 0; i < m; i++) {
        cin >> a[i];
    }

    // sort the array
    sort(a, a+m);

    // calculate the minum sum of the subarray of length of n
    int min = a[n+0-1] - a[0];
    for (int i = 1; i <= m - n; i++) {
        if ((a[n + i - 1] - a[i]) < min) min = a[n + i - 1] - a[i];
    }

    cout << min << endl;
}