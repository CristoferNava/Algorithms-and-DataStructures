#include <iostream>

using namespace std;

int main() {
    // In most expressions, when we use an array, the array is automatically
    // converted to a pointer to the first element in that array:
    int ia[10]; // array of 10 ints
    int* ip = ia; // convert ia to a pointer to the first element

    int arr[] = {12, 13, 15, 71, 44};
    int* ptr1 = &arr[0];
    int* ptr2 = arr;
    
    cout << ptr1 << endl;
    cout << ptr2 << endl;
    ++ptr1;
    ++ptr2;
    cout << *ptr1 << endl;
    cout << *ptr2 << endl;
}