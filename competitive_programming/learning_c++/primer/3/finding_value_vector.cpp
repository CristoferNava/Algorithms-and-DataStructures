// Finding an integer in an unsorted array
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {23, 12, 15, 21, 11};

    bool found = false;
    for (auto i = v.begin(); i != v.end(); i++) {
        if (*i == 89) found = true;
    }

    if (found) cout << "Found!" << endl;
    else cout << "Not found :(" << endl;
}