// A reference defines an altenartive name for an object.
// A reference is not an object, is just another name for an already existing
// object

#include <iostream>

using namespace std;

void changeValue(int& i) {
    i = 25;
}

int main() {
    int value = 42;
    int& refVal = value;
    
    // cout << refVal << endl;  

    refVal = 2;
    // cout << value << endl;  

    // int i = 4;
    // changeValue(i);
    // cout << i << endl;

    int tValue = 15;
    int& rValue = tValue;
    int& another = rValue;
    another = 12;

    // cout << tValue << " " << rValue << " " << another << endl;
    int i;
    int& ri = i;
    i = 5;
    ri = 10;
    cout << i << " " << ri << endl;

}