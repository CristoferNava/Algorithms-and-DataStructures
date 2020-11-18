#include <iostream>
#include <vector>

using namespace std;

vector<int> plusOne(vector<int>& digits) {
     bool carry = true;
        
        for(int i = digits.size()-1; i >= 0 && carry; --i) {
            carry = (++digits[i] %= 10) == 0;
        }

        if(carry) {
            digits.insert(digits.begin(), 1);
        }
    
        return digits;
} 

int main() {
    vector<int> v = {9, 9, 9, 9};
    vector<int> result = plusOne(v);
    for (auto x : result) 
        cout << x;
}