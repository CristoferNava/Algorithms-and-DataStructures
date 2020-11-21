#include <iostream>
#include <string>

using namespace std;

int main() {
    string s1 = "Burbuja";
    
    cout << s1.empty() << endl;
    cout << s1.size() << endl;
    string s2 = "Nava";
    string s3 = s1 + " " + s2;
    cout << s3 << endl;
    bool equals = s1 == s2; // two strings are equal if they contain the same characters
    cout << equals << endl;

    int len = s1.size();
    cout << len << endl;

    // when we mix strings and string or character literals, at least one operand
    // to each + operator must be of string type:
    string s4 = "Cristofer " + "Nava";
    cout << s4 << endl 
}   