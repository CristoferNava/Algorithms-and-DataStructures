// given two lists A and B that both contain n elements, calculate the number
// of elements that belong to both of the lists.
// A = [5, 2, 8, 9, 4] and B = [3, 2, 9, 5] -> 3

#include <iostream>
#include <vector>

using namespace std;

int main() {
    // brute force solution 
    // time complexity: O(a * b)
    // space complexity: O(max(a, b))
    vector<int> a = {5, 2, 8, 9, 4};
    vector<int> b = {3, 2, 9, 5};
    vector<int> c;

    // for (int i = 0; i < a.size(); i++) {
    //     for (int j = 0; j < b.size(); j++) {
    //         if (a[i] == b[j]) c.push_back(a[i]);
    //     }
    // }
    // cout << c.size() << endl;

    // solution: merge both lists, sort the new list, traverse the new list
    // merge both lists
    // time complexity: O(n logn)
    for (int i = 0; i < a.size(); i++) { // O(a)
       c.push_back(a[i]);
    }
    for (int i = 0; i < b.size(); i++) { // O(b)
       c.push_back(b[i]);
    }

    // sort the c
    // O(n logn)
    sort(c.begin(), c.end());

    // traverse the array and count the common elements
    int common = 0;
    for (int i = 0; i < c.size() - 1; i++) { // O(a+b)
        if (i == 0) {
            if (c[i] == c[i + 1]) common++;
        } else {
            if ((c[i] == c[i + 1]) && (c[i] != c[i-1])) common++;
        }
    }

    cout << common << endl;

}