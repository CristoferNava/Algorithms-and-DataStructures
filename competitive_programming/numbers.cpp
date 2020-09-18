#include <iostream>

using namespace std;

int main() {
    int x; // 32-bit type
    long long y = 124243414343422LL; // 64-bit type

    // The remainder can be taken before the operation
    // (a+b) mod m == (a mod m + b mod m) mod m
    // (a-b) mod m == (a mod m - b mod m) mod m
    // (a*b) mod m == (a mod m * b mod m) mod m
    // with this we can take the remainder after every operation and the numbers
    // will never be too large
    int a = 12;
    int b = 7;
    int m = 5;
    cout << (a + b) % m << "\n";
    cout << (a % m + b % m) % m << "\n"; 


    // floating point numbers;
    double firstFloat; // 64-bit 
    long double secondFloat; // 80-bit 

    // it should be risky to compare floating point numbers using == operator,
    // because it is possible that the values should be equal but they are not
    // because of precision errors.
    // Better way to compare them is to assume that two numbers are equal if the
    // difference between them is less than ë, where e is a small number
    // in practice using ë=10^-9
    if (abs(a-b) < 1e-9) {
        // a and b are equal
    }
    return 0;
}