#include <iostream>

using namespace std;

void foo(int a, int b) {
    a = a * 2;
    b = b * 3;
    cout << a << " " << b << endl;
}

int main() {
    foo(1, 2);
    foo(1, 2);
}