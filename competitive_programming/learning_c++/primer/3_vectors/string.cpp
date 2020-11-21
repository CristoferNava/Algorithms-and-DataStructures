#include <iostream>
#include <string>

using namespace std;

int main() {
    // Different ways to initialize a string
    string s1 = "Cristofer";
    string s2 = s1; // s2 is a copy of s1
    string s3 = "hiya"; // s3 is a copy of the string literal
    string s4(5, 'c'); // s4 is ccccc 
    string s5 = "hiya"; // copy initialization, the right side copies to the object of the left side
    string s6("hiya"); // direct initialization
}