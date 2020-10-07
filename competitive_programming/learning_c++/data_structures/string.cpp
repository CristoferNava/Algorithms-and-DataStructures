#include <iostream>
#include <string>

using namespace std;

int main() {
    string s1; // default initialization; s1 is an empty string
    string s2 = s1; // s2 is a copy of s1
    string s3 = "hiya"; // s3 is a copy of the string literal
    string s4(4, 'c'); // s4 is cccc

    cout << s4 << endl;
}