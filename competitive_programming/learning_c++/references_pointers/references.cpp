// A reference defines an alternative name for an object
// A reference is not an object
// because references are not objects, we may not define a reference to a reference

#include <iostream>

using namespace std;

int main() {
    int value = 1045;
    int &rvalue = value;

    cout << rvalue << endl;
}
