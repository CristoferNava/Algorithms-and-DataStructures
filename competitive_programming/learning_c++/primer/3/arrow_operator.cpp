#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    vector<string> names = {"cristofer", "damaris", ""};

    auto name = names.begin(); 
    cout << ((*name).empty()) << endl; // false, it has the string cristofer
    name++;
    name++;
    cout << ((*name).empty()) << endl; // true, it has an empty string

    // A better way to write the code above is using the arrow operator:
    // The arrow operator -> combines dereference and member access into a 
    // single operation: (*it).mem it->mem
    name--;
    cout << (name->empty()) << endl; // false, it contains the string damaris
}