#include <iostream> // tells the compiler that we want to user the iostream library

int main() {
    // << operator takes two operands, the left one must be an ostream object
    // and the right one is a value to print
    // namespaces allow us to avoid inadvertent collisions between the names
    // we define and uses of those same names inside a library
    int n1, n2;
    std::cout << "Enter two numbers: " << std::endl;
    std::cin >> n1 >> n2;
    std::cout << "The sum is " << n1 + n2 << std::endl;

    return 0;
}