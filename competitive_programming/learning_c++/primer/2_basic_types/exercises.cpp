#include <iostream>

using namespace std;

int main() {
    int i = 8;
    int *p = &i;
    *p = *p * *p;

    cout << i << endl;
}