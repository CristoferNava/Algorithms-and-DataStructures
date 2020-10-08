// a bitset is an array whose each value is either 0 or 1
// requieres less memory than an ordinary array, because each element in a 
// bitset only uses one bit of memory
#include <iostream>
#include <bitset>

using namespace std;

int main() {
    bitset<10> c;
    c[0] = 1;
    c[1] = 1;
    c[4] = 1;
    c[7] = 1;

    // another way to create a bitset
    bitset<10> s(string("0001110101")); // from right to left
    for (int i = 0; i < 10; i++) {
        cout << s[i] << " ";
    }
    cout << endl;

    cout << s.count() << endl; // count return the number of ones in the bitset

    // using bit operations
    bitset<10> a(string("0010110110"));
    bitset<10> b(string("1011011000"));
                       //0010010000 and bit a bit
                       //1011111110 or bit a bit
                       //1001101110 different -> 1
    cout << (a&b) << endl; // 0010010
    cout << (a|b) << endl;
    cout << (a^b) << endl;
}