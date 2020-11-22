// Local static variables lifetime continues across calls to the function.
// Each local static objects is initialized before the first time execution 
// passes through the object's definition. Local statics are not destroyed when 
// a function ends; they are destroyed when the program terminates.

#include <iostream>

using namespace std;

void count_calls() {
    static int times = 1;
    printf("This funcion has been called %d times\n", times);
    ++times;
}

int main() {
    count_calls();
    count_calls();
    count_calls();
}