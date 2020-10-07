#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    // int s[n];

    int prev, current, max = 1, counter = 1;
    for (int i = 0; i < n; i++) {
        cin >> current;
        if (i == 0) {
            prev = current;
            continue;
        }
        if (current >= prev) {
            counter++;
            if (counter > max) max = counter;
        } else counter = 1;
        prev = current;
    }
    // for (int i = 0; i < n; i++) {
    //     cin >> s[i];
    // }
  
    // int max = 1;
    // int counter = 1;
    // for (int i = 0; i < n - 1; i++) {
    //     if (s[i + 1] >= s[i]) {
    //         counter++;
    //         if (counter > max) max = counter;
    //     } else counter = 1;
    // }

    cout << max << endl;
}