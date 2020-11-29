#include <iostream>

using namespace std;

void printArray(const int[], size_t); // read only
void changeArray(int[], size_t); // read and write

int main() {
    int arr[] = {1, 2, 3, 4};
    printArray(arr, end(arr) - begin(arr));
    changeArray(arr, end(arr) - begin(arr));
    cout << endl;
    printArray(arr, end(arr) - begin(arr));
}

void printArray(const int array[], size_t size) {
    for (size_t i = 0; i != size; ++i) {
        cout << array[i] << " ";
    }
}

void changeArray(int array[], size_t size) {
    for (size_t i = 0; i != size; ++i) {
        array[i] *= 2;
    }
}