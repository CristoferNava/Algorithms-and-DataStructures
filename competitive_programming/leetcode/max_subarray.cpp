#include <iostream>
#include <vector>

using namespace std;
 
int maxSubarray(vector<int>& nums) {
    if (nums.size() == 1) return nums[0];

    int sum = nums[0];
    int best = sum;

    
    for (int i = 1; i < nums.size(); i++) {
        sum = max(nums[i], sum + nums[i]);
        cout << sum << endl;
        best = max(best, sum);
    }
    return best;
} 
int main() {
    vector<int> v = {-2,3,-1,4,5};
    int result = maxSubarray(v);
    cout << result << endl;
}
