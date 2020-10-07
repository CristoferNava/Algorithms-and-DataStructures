// pairs are sorted primarily according to the first element (first)
// however, if the first elements of two pairs are equal, second is used to sort

#include <iostream>
#include <vector>
#include <tuple>
#include <utility> // for pair

using namespace std;

int main() {
    vector<pair<int, int>> v;
    v.push_back({1, 5});
    v.push_back({2, 3});
    v.push_back({1, 2});
    sort(v.begin(), v.end());

    for (int i = 0; i < v.size(); i++) {
        cout << v[i].first << " " << v[i].second << endl;
    } 

    cout << endl;

    // in a similar way, tuples are sorte primarily by the first element, then
    // the second, third, etc
    vector<tuple<int, int, int>> t;
    t.push_back({2, 1, 5});
    t.push_back({1, 5, 3});
    t.push_back({2, 1, 3});
    sort(t.begin(), t.end());

    for (int i = 0; i < t.size(); i++) {
        cout << get<0>(t[i]) << " " << get<1>(t[i]) << " "<< get<2>(t[i]) << endl;
    }
}