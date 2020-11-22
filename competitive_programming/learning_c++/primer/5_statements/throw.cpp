#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // throwing an exception terminates the current function and transfers control
    // to a handler that will know how to handle this error.
    if (b == 0)
        throw runtime_error("Division by zero. Oh no :v");
    cout << "Here we go" << endl;
    double c = static_cast<double>(a) / b;
    cout << c << endl;
}