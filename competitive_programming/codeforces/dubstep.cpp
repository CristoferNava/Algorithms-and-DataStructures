#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    string s1 = "";

    for (int i = 0; i < s.size();) {
        if (s.substr(i, 3) == "WUB") {
            i += 3;
            s1 += " ";
        } else {
            // cout << s[i];
            s1 += s[i];
            i++;
        }
    }
    // clean the spaces in s1
    // removes the blank spaces at the begining of the string
    int j = 0;
    for (int i = 0; i < s1.size(); i++) {
        if (s1[i] != ' ') break;
        j++;
    }
    s1.erase(0, j);

    for (int i = 0; i < s1.size(); i++) {
        if (i == s1.size() - 1 && s1[i] == ' ') {
            s1.erase(i, 1); // from position i deletes 1 character
        }
            
        // deletes between spaces
        else if (s1[i] == ' ' && s1[i + 1] == ' ') s1.erase(i, 1);
    }
    cout << s1 << endl;
}