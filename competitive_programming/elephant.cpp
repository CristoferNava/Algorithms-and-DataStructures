#include <iostream>

using namespace std;

int main() {
    int x;
    cin >> x;

    if (x <= 5) {
        cout << 1 << endl;
        return 0;
    }
    
    int steps = 1;
    while (x > 5) {
        x -= 5;
        steps++;
    }

    cout << steps << endl;
}