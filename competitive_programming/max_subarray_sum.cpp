// g++ -std=c++11 filename.cpp
#include <vector>
#include <iostream>

using namespace std;

int maxSubarraySum(vector<int>);

int main() {
    vector<int> numbers = {-1, 2, 4, -3, 5, 2, -5, 2};

    cout << maxSubarraySum(numbers) << "\n";  

    return 0;
}

int maxSubarraySum(vector<int> arr) {
    // time complexity: O(n^3)
    // space complexity: O(1)
    int best = 0; // max sum calculated
    int n = arr.size();
    // i and j are the first and last index of the subarray
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int sum = 0;
            // sum the elements from i to j
            for (int k = i; k <= j; k++) {
                sum += arr[k];
            }
            best = max(best, sum);
        }
    }
    return best;
}