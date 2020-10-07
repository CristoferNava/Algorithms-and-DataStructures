#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int counter = 1;
    bool danger = false;
    for (int i = 0; i < s.size(); i++) {
        if (counter == 7) {
            danger = true;
            break;
        }

        if (s[i] == s[i+1]) counter++;
        else counter = 1;
    }

    if (danger) cout << "YES" << endl;
    else cout << "NO" << endl;
}