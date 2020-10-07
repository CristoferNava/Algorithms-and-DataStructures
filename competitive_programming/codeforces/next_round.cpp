#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    int scores[n];

    for (int i = 0; i < n; i++) {
        cin >> scores[i];
    }

    int advance = 0;
    for (int i = 0; i < n; i++) {
        // careful of index of out bound!
        if (scores[i] > 0 && scores[i] >= scores[k-1]) {
            advance++;
        }
    }
    
    cout << advance << endl;
}