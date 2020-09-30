// write a function that takes an integer and modify its original value
// (not a copy)
#include <iostream>

using namespace std;

void increment(int*);
void betterIncrement(int&); // using & operator we can write a more sugar version

int main() {
    int a = 1;
    increment(&a);
    betterIncrement(a);
    cout << a << endl;
}


void betterIncrement(int& n) {
    n++;
}

void increment(int* n) {
    (*n)++; // the ++ makes first so we have to break the precedence
}