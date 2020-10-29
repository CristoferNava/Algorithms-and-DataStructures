// initialization is not assignment, initialization happens when a variable
// is given a value when it is created. Assignment obliterates an object's
// current value and replaces that value with a new one.

#include <iostream>

using namespace std;

int main() {
    // different ways of initialization
    int a = 12;
    int b = {12};
    int c{12};
    int d(12);
    
    printf("%d %d %d %d %d", a, b, c, d, i);
}