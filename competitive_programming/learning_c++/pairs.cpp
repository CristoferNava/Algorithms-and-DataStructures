// pair is used to combine together two values which may be different in type.

#include <iostream>
#include <utility> // pair is defined in utility
#include <string>

using namespace std;

int main() {
    pair <string, string> name;
    name.first = "Cristofer";
    name.second = "Nava";

    // a simpler way to initialize pairs
    pair <string, int> aFriend ("Alfonso", 22);

    cout << aFriend.first << endl;
    cout << aFriend.second << endl;
}