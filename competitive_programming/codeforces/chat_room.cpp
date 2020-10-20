#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    string t = "";

    for (auto c : s) {
        if (c == 'h' && t.size() == 0) t += 'h';
        if (c == 'e' && t.size() == 1) t += 'e';
        if (c == 'l' && count(t.begin(), t.end(), 'l') == 1) t += 'l';
        if (c == 'l' && t.size() == 2) t += 'l';
        if (c == 'o' && t.size() == 4) t += 'o';
    }

    if (t == "hello") cout << "YES" << endl;
    else cout << "NO" << endl;
}