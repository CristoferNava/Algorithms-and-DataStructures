#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    int value;
    int sumValues = 0;
    int problems = 0;
    for (int i = 0; i < n; i++) {
        sumValues = 0;
        for (int j = 0; j < 3; j++) {
            cin >> value;
            sumValues += value;
        }
        if (sumValues >= 2) {
            problems++;
        }
    }

    cout << problems << endl;
}
