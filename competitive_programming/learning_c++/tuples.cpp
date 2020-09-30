// A tuple is an object that can hold a number of elements.
#include <iostream>
#include <tuple>
#include <string>

using namespace std;

int main() {
    // declaring a tuple
    tuple <string, string, int> cristofer;
    cristofer = make_tuple("Cristofer", "Nava", 22);

    // printing the values of the tuple
    cout << get<0>(cristofer) << endl;

    tuple <string, string, int> alfonso ("Alfonso", "Zavala", 22);
    cout << get<0>(alfonso) << endl;
}