#include <iostream>

using namespace std;

void change(int&);
bool areEqual(const string&, const string&);

int main() {
    int n = 5;
    change(n);
    cout << n << endl;

    // we want to compare the length of two strings, strins can be long so we
    // use references, because comparing two strings does not involve changing
    // the strings, we make the parameters references to const
    string s1 = "Anakin";
    string s2 = "Obi";

    cout << (areEqual(s1, s2)) << endl;
}

void change(int& x) { // x is a reference (another name) for the object passed to change
    x = 2;
}

bool areEqual(const string& s1, const string& s2) {
    return s1.size() == s2.size();
}