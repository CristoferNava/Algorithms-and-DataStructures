#include <iostream>
#include <string>

using namespace std;

int main() {
    string name = "Lizeth";

    // On each iteration, the next character in name will be copied into c.
    for (auto c : name) {
        // cout << c << " ";
    }

    for (auto c : name) {
        c = 'a';
    }
    cout << name << endl;

    // If we want to change the value of the characters in a string, we must
    // define the loop variable as a reference type, with this the variable is
    // bound to each element in the sequence in turn,
    for (auto &c : name) {
        c = toupper(c);
    }
    cout << name << endl;

    // Returns a reference to the character at given position
    char first = name[22];
    cout << first << endl;
}