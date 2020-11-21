// . operator fetches a member from an object of a class type
// arrow is defined that ptr->mem is (*prt).mem
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s1 = "a string", *p = &s1;
    int n = s1.size();
    n = (*p).size();
    n = p->size();
}