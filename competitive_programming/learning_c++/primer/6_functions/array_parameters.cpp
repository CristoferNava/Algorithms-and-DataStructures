// We cannot copy an array, and when use an array it is (usually) converted to
// a pointer.

// These three declarations of print are equivalent
// each function has a single parameter of type const int*
void print1(const int*);
void print2(const int[]); // show the intent that the function takes an array
void print3(const int[10]); // dimension for documentation purposes (at best)

int main() {
    int i = 0, j[2] = {0, 1};
    print1(&i); // ok: &i is int*
    print1(j); // ok: j is converted to an int* that points to j[0]
    // if we pass an array to print, that argument is automatically converted to
    // a pointer to the first element in the array; the size of the array is
    // irrelevant
}