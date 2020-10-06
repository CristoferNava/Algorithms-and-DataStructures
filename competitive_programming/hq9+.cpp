#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    bool valid = false;
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == 'H' || s[i] == 'Q' || s[i] == '9') {
            valid = true;
        }
    }

    if (valid) cout << "YES" << "\n";
    else cout << "NO" << "\n"; 
}