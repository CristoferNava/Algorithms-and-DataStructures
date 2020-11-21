#include <iostream>
#include <typeinfo>

using namespace std;

int main() {
    int i = 15, j = 7;
    const int c = 4;
    double k = static_cast<double>(i) / j;
    double l = i / static_cast<double>(c);
    cout << k << endl;
    cout << l << endl;
}