#include <iostream>
#include <vector>

using namespace std;

int main() {
    // we specify the address of the first element and one past the last element
    // that we wish to copy:
    int array[] = {0, 1, 2, 3, 4, 5};
    // v has six elements; each is a copy of the corresponding element in array
    vector<int> v(begin(array), end(array)); 

    // subV{1, 2, 3}
    vector<int> subV(array + 1, array + 4);
    for (auto x : subV)
        cout << x << " ";
}