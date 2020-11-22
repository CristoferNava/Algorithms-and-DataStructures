#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    try {
        if (b == 0) throw runtime_error("Oh no. Division by zero");
        double c = static_cast<double>(a) / b; 
        cout << c << endl;
    } catch(runtime_error err) {
        cout << err.what() << endl;
    }
    cout << "El error fue manejado y seguimos trabajando" << endl;
}