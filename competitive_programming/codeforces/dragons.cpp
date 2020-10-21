#include <iostream>
#include <vector>
#include <utility>

using namespace std;

int main() {
    int s, n;
    cin >> s >> n;

    vector<pair<int, int>> dragons;
    int ds, db;
    for (int i = 1; i <= n; i++) {
        cin >> ds >> db;
        dragons.push_back({ds, db});
    }

    // sort the drangons by strength
    sort(dragons.begin(), dragons.end());
    bool win = true;
    for (auto dragon : dragons) {
        if (s > dragon.first) s += dragon.second;
        else win = false;
    }

    if (win) cout << "YES" << endl;
    else cout << "NO" << endl;
}