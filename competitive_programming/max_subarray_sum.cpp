// g++ -std=c++11 filename.cpp
#include <vector>
#include <iostream>

using namespace std;

int maxSubarraySum2(vector<int>);
int maxSubarraySum3(vector<int>);
int maxSubarraySum(vector<int>);

int main() {
    vector<int> numbers = {-1, 2, 4, -3, 5, 2, -5, 2};

    cout << maxSubarraySum(numbers) << "\n";  

    return 0;
}

int maxSubarraySum(vector<int> arr) {
    // time complexity: O(n)
    // space complexity: O(1)
    
    // for each array position, calculate the maximum sum of a subarray that
    // ends at that position  
    int best = 0;
    int sum = 0;
    int n = arr.size();

    for (int i = 0; i < n; i++) {
        sum = max(arr[i], sum + arr[i]);
        best = max(best, sum);
    }

    return best;
}

int maxSubarraySum2(vector<int> arr) {
    // time complexity: O(n^2)
    // space complexity: O(1)
    int best = 0; // max sum value
    int n = arr.size();

    for (int i = 0; i < n; i++) {
        int sum = 0; // calculate the sum while is traversing the array
        for (int j = i; j < n; j++) {
            sum += arr[j];
            best = max(best, sum);
        }
    }
    return best;
}

int maxSubarraySum3(vector<int> arr) {
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