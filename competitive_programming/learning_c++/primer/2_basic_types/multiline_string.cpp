#include <iostream>
#include <string>

using namespace std;

int main() {
    // Two strings literals that appear adjacent to one to another and that
    // are separated only by spaces, tabs or new lines are concatened into a 
    // single one
    string tooLarge = "This could be a very large string "
                      "so we have to write it in two separed lines";
    cout << tooLarge << endl;
}