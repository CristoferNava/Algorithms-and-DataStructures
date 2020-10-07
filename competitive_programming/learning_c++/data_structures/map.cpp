// map is based on a balance binary tree and accessing elements takes O(log n) time
// unordered_map uses hashing and accessing takes O(1) time on average
#include <iostream>
#include <map>

using namespace std;

int main() {
    map<string, int> m;
    m["monkey"] = 4;
    m["banana"] = 5;
    m["apples"] = 3;

    cout << m["monkey"] << endl;
    // if the value of a key is requested but the map does not containt it,
    // the key is automatically added to the map with a default value
    cout << m["mono"] << endl;

    // the method count checks if a key exists in a map
    if (m.count("mono")) cout << "It exists" << endl;
    if (m.count("pollo")) cout << "It exists" << endl;
    if (m.count("pollo")) cout << "It exists" << endl;

    // printing all the keys and values in a map
    for (auto x : m) {
        cout << x.first << ": " << x.second << endl; 
    }

}