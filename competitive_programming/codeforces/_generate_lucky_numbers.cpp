#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 100;

    vector<int> ln;
    for (int i = 4; i < n; i++) {
        int ni = i; 
        bool lucky = true;
        while (ni > 0) {
            if (ni % 10 == 4 || ni % 10 == 7) {
                ni /= 10;
                continue;
            }
            lucky = false;
            break;
        }
        if (lucky)
            ln.push_back(i);
    }

    for (auto x : ln)
        cout << x << " " << endl;
}