#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n; // number of stones
    string s;
    cin >> s; // string with the stones

    int counter = 0;
    for (int i = 0; i < s.size() - 1; i++) {
        if (s[i] == s[i+1]) counter++;
    }

    cout << counter << endl;
}