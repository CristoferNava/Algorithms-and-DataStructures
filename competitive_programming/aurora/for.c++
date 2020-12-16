#include <iostream>

using namespace std;

int main() {
    int n = 10;

    // while -> for, do while
    // for auto
    int i = 1; 
    for (;i != n + 1;) {
        printf("%d %d\n", i, n);
        --n;
        ++i;
    }
}