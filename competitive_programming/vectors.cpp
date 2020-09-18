#include <iostream>
#include <vector>
#include <string>

using namespace std;

bool binarySearch(vector<int>, int);
bool linearSearch(vector<int>, int);

int main() {
    // binary search
    // sorted arrays
    vector<int> numbers;

    // fill the array with the first 100 integers
    for (long long i = 1; i <= 10000000; i++) {
        numbers.push_back(i);
    }

    // algorithm
    // left side, right side
    // middle = (left + right) / 2
    // if target = arr[middle] return true
    // else if target < arr[middle] : r = m - 1
    // else (target > arr[middle]) l = m + 1
    // repeat until r <= l == while l <= r
    
    cout << binarySearch(numbers, 101) << "\n";
    cout << linearSearch(numbers, 101) << "\n";


    return 0;
}

bool binarySearch(vector<int> numbers, int target) {
    int left = 0;
    int right = numbers.size() - 1;
    int middle;
    int counter = 0;

    while (left <= right) {
        counter++;
        // cout << counter << endl;
        middle = (left + right) / 2;
        if (target == numbers[middle]) return true;
        else if (target < numbers[middle]) right = middle - 1;
        else left = middle + 1;
    }
    return false;
}

bool linearSearch(vector<int> numbers, int target) {
    for (int i = 0; i < numbers.size(); i++) {
        if (target == numbers[i]) return true;
    }
    return false;
}