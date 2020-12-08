#include <iostream>

using namespace std;

int test(int a = 2, int b = 3);

int main() {
    int result1 = test();
    int result2 = test(5, 6);

    cout << result1 << " " << result2 << endl;
}

int test(int a, int b) {
    return a + b;
}