#include <iostream>
#include <vector>

using namespace std;

int removeDuplicates(vector<int>& nums) {
    int duplicates = 0;
    for (int i = 0; i < nums.size() - 1;) {
        if (nums[i] == nums[i + 1]) {
            // nums.erase(nums.begin() + i + 1);
            // continue;
            duplicates++;
        }
        i++;
    }
    return nums.size() - duplicates;
}

int main() {
    vector<int> v = {0,0,1,1,1,2,2,3,3,4};

    cout << (removeDuplicates(v)) << endl;
}