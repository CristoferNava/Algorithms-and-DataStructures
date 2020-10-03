#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int max = 0, passengers = 0, in, out;
    for (int i = 1; i <= n; i++) {
        cin >> out >> in;
        passengers -= out;
        passengers += in;
        if (passengers > max) max = passengers;
    }

    cout << max << endl;
}