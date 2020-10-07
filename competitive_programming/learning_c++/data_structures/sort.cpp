#include <iostream>
#include <vector>

using namespace std;

void printVector(vector<int>);

int main() {
    vector<int> numbers = {5, 6, 1, 3, 4, 8, 7};
    sort(numbers.begin(), numbers.end());
    // sorting in reverse order
    sort(numbers.rbegin(), numbers.rend());

    // sorting an ordinary array
    int integers[] = {5, 6, 1, 34, 63, 1};
    int n = sizeof(integers) / sizeof(integers[0]); // size of the array
    sort(integers, integers + n);

    // sorting an string
    string s = "monkey";
    sort(s.begin(), s.end());
    cout << s;

    cout << endl;

    return 0;
}

void printVector(vector<int> numbers) {
    for (int i = 0; i < numbers.size(); i++) {
        cout << numbers[i] << " ";
    }
}