#include <iostream>
#include <string>
#include <set>

using namespace std;

int main() {
    string s;
    cin >> s;
    set<char> chars;

    for (int i = 0; i < s.size(); i++) {
        chars.insert(s[i]);
    }

    if (chars.size() % 2 == 0) {
        cout << "CHAT WITH HER!";
    } else {
        cout << "IGNORE HIM!";
    }
}