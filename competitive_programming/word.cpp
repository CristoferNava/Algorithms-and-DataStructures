#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int uppers = 0, lowers = 0;
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == toupper(s[i])) uppers++;
        else lowers++;
    }

    if (lowers >= uppers) transform(s.begin(), s.end(), s.begin(), ::tolower);
    else transform(s.begin(), s.end(), s.begin(), ::toupper);

    cout << s << "\n";
}