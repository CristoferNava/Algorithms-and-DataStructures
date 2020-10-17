#include <iostream>
#include <string>
#include <vector>

using namespace std;

string ans(int n, int a, int b) {
    vector<char> letters = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                            'u', 'v', 'w', 'x', 'y', 'z'};
    string s = "";
    while (s.size() < n) {
        for (int i = 0; i < b; i++) {
            if (s.size() == n) break;
            s += letters[i];
        }
    }
    return s;
}

int main() {
    int t;
    cin >> t;
    
    int n, a, b;
    for (int i = 1; i <= t; i++) {
        cin >> n >> a >> b;
        cout << ans(n, a, b) << endl;
    }
}