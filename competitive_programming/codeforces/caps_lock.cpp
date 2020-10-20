#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    string s2 = s; // all uppercase case
    string s3 = s.substr(1); // all uppercase except the first one

    transform(s2.begin(), s2.end(), s2.begin(), ::toupper);
    transform(s3.begin(), s3.end(), s3.begin(), ::toupper);
    if (s == s2) {
        transform(s.begin(), s.end(), s.begin(), ::tolower);
        cout << s << endl;
    } else if (s.substr(1) == s3) {
        string s4 = "";
        s4 += toupper(s[0]);
        transform(s3.begin(), s3.end(), s3.begin(), ::tolower);
        s4 += s3;
        cout << s4 << endl;
    } else 
        cout << s << endl;
}