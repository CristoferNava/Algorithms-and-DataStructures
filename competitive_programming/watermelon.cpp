#include <iostream>

using namespace std;

int main() {
    // divide the watermelon in 2 parts
    // each part has to be an even number
    int w;
    cin >> w;

    if (w % 2 == 0 && w > 2) {
        cout << "YES";
    } else {
        cout << "NO";
    }

}