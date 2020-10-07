#include <iostream>
#include <string>

using namespace std;

int main() {
    string a = "welcome to New York";
    string b = a + a;
    cout << b << endl;
    cout << b[3] << endl;
    string c = a.substr(3, 4); // begin at position 3 and has a length of 4
    cout << c << endl;
    cout << a.find('e') << endl; // finds the position of the first occurrence
}