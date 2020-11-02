#include <iostream>

using namespace std;

int main() {
    /*
    // reference
    int age = 22;
    int& r = age;
    r = 23;

    // pointers
    int i = 10;
    int* p = &i;
    int* p2 = p;

    *p2 = 23;

    cout << i << endl;
    */
   int i = 42;
   int& r = i;
   int* p = &i;
   *p = 75;
   r = *p;
   cout << i << endl;
}