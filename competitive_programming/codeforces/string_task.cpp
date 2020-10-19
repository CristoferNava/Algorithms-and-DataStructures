#include <iostream>
#include <string>
#include <set>

using namespace std;

int main() {
    string s;
    cin >> s;
    set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'y'};

    // transform to lowercase transform(s1.begin(), s1.end(), s1.begin(), ::tolower); 
    transform(s.begin(), s.end(), s.begin(), ::tolower);
    string s2 = "";
    for (int i = 0; i < s.size(); i++) {
        if (!vowels.count(s[i])) s2 += s[i];
    }

    string s3 = "";
    for (int i = 0; i < s2.size(); i++) {
        s3 += '.';
        s3 += s2[i];
    }

    cout << s3 << endl;
}