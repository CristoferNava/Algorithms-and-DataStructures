#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

vector<int> generatePrimes(int n);

int main() {
    vector<int> result = generatePrimes(100);

    for (auto &x : result)
        cout << x << " ";
}

vector<int> generatePrimes(int n) {
    vector<int> primes = {};

    // time: O(n * /-n) 
    // space: O(n)
    bool prime = true;
    for (int i = 2; i <= n; ++i) { // n
        for (int j = 2; j <= sqrt(i); ++j) { // 
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime)
            primes.push_back(i);
        prime = true;
    }
    return primes;
}