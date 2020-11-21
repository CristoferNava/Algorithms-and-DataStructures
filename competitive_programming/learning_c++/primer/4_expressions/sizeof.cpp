// The sizeof operator returns the size, in bytes, of a expression or a type name.
// The result of sizeof is a constant expression of type size_t
// sizeof (type)
// sizeof expr

#include <iostream>

using namespace std;

int main() {
    int numbers[] = {1, 2, 3, 4, 5}; // each integer has 4 bytes
    int numbersSize = (sizeof numbers) / (sizeof numbers[0]);
    cout << numbersSize << endl;    
}