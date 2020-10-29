// bad style coding
#include <iostream>

using namespace std;

int reused = 42;
int main() {
    int reused = 20;

    cout << ::reused << " " << reused << endl;    
    // when the scope operator has an empty left-hand side, it is a request to
    // fetch the name on the rigth-hand side from the global scope
}