#include <iostream>
#include <vector>

using namespace std;


void byValue(int);
void byReference(int&);
void oldStyle(int*);

int main() {
    int a1 = 2;
    int a2 = 2;
    int a3 = 2;

    byValue(a1);
    byReference(a2);
    oldStyle(&a3);

    cout << a1 << endl; // 2
    cout << a2 << endl; // 3
    cout << a3 << endl; // 3
}

[-----a1-------a-]
void byValue(int a) {
    a = 3;
}
      a
[-----a1--------]
void byReference(int& a) {
    a = 3;
}

void oldStyle(int* p) {
    *p = 3;
}