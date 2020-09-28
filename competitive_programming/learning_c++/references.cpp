#include <iostream>
#include <string>

using namespace std;

int main() {
    string name = "Lizeth";
    string &reference = name; // a reference is an alias
    reference = "Cristofer";

    int ival = 1024;
    int &refVal = ival;
    refVal = 2;
    int ii = refVal; // same as ii = ival

    cout << ii << "\n";
}