#include <bits/stdc++.h>

using namespace std;

int main() {
    int n; 
    cin >> n;
    vector<int> coins; 

    int coin;
    for (int i = 0; i < n; i++) {
        cin >> coin;
        coins.push_back(coin);
    }

    // sort the coins in reverse order
    sort(coins.rbegin(), coins.rend());

    // calculate the sum of all the coins
    int sum = 0;
    for (int i = 0; i < coins.size(); i++) {
        sum += coins[i];
    }

    int minSum = (sum / 2) + 1;
    // count the number of coins
    int counter = 0, counterSum = 0;
    for (int i = 0; i < coins.size(); i++) {
        if (counterSum >= minSum) break;
        counterSum += coins[i];
        counter++;
    }

    cout << counter << endl;
}
