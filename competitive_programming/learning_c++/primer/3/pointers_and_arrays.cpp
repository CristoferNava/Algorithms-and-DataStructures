// int *ptrs[10]; :ptrs is an array of 10 pointers to int
// int &refs[10]; :error, references are not objects
// int (*pArray)[10] = &arr; :pArray points to an array of 10 ints
// int (&arrRef)[10] = arr; arrRef refers to an array of 10 ints
// int *(&arry)[10]; :arry is a reference to an array of 10 pointers
#include <iostream>
#include <string>

using namespace std;

int main() {
    string nums[] = {"one", "two", "three"}; // array of strings
    string *p = &nums[0]; // p points to the first element in nums
    string *p2 = nums; // equivalent to p2 = &nums[0]
    
    // in arrays pointers are iterators:
    int arr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int *pt = arr; // pt points to the first element in arr
    pt++; // points to arr[1]
    cout << *pt << endl;

    // we can obtain an off-the-end pointer by using another special property of
    // arrays: we can take the address of the nonexistent element one past the last
    // element of an aray
    int *end = &arr[10]; // pointer just past the last element in arr
    for (int *i = arr; i != end; i++) {
        cout << *i << " ";
    }
}