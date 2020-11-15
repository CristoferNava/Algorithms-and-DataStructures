#include <iostream>

using namespace std;

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int *b = begin(nums); // pointer to the first element in nums
    int *e = end(nums); // pointer one past the last element in nums

    // As with iterators, subtracting two pointers give us the distance between
    // those pointers.
    auto n = end(nums) - begin(nums);
    cout << n << endl;

    int last = *(nums + 4); // last has value of 5
    cout << last << endl;
}