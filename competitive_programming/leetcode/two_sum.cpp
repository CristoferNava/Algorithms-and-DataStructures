#include <iostream>
#include <vector>
#include <map>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> result;

    // Build the map<value, index>
    // time: O(n) space: O(n)
    map<int, int> ht;
    for (int i = 0; i < nums.size(); i++) {
        ht[nums[i]] = i;
    }

    // Search the target value
    // time: O(n) space: O(1)
    for (int i = 0; i < nums.size(); i++) {
        int comp = target - nums[i];
        if (ht.count(comp) && ht[comp] != i) {
            result.push_back(i);
            result.push_back(ht[comp]);
            return result;
        }
    }
    return result;
    // time: O(n). space: O(n)
}

int main() {
    vector<int> nums = {3,2,4};
    int target = 6;
    vector<int> result = twoSum(nums, target);
    cout << result[0] << " " << result[1] << endl;
}