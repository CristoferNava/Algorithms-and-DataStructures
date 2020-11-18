#include <iostream>
#include <vector>

using namespace std;

int maxSubArray(vector<int>& nums) {
    int sum = nums[0];
    int best = sum;

    for (int i = 1; i < nums.size(); i++) {
        sum = max(nums[i], sum + nums[i]);
        best = max(sum, best);
    }

    // time: O(n)
    // space: O(1)
    return best;
}

int main() {
    vector<int> v = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(v) << endl;
}