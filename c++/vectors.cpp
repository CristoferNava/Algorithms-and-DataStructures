#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    vector<string> names;

    names.push_back("Alfonso");
    names.push_back("Cristofer");
    names.push_back("Elon");

    for (int i = 0; i < names.size(); i++) {
        cout << names[i] << "\n";
    }

    return 0;
}