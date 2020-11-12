#include <iostream>
#include <vector>

using namespace std;

// time: O(log n), space: O(1)
int searchInsert(vector<int>& nums, int target) {
    if (nums.size() == 0) return 0;
    int l = 0;
    int r = nums.size() - 1;
    int m; 

    while (l <= r) {
        m = (l + r) / 2;
        if (nums[m] == target) return m;
        else if (target < nums[m]) r = m - 1;
        else l = m + 1;
    }
    // cout << m << endl;
    if (nums[m] < target) return m + 1;
    else return m;
}

int main() {
    vector<int> v = {1};
    int target = 0;
    int result = searchInsert(v, target);
    cout << result << endl;
}   