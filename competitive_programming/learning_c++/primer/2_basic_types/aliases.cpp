//  A type alias is name that is a synonym for another type
#include <iostream>

using namespace std;

// we can define a type alias in one of two ways
typedef double wages; // wages is a synonym for double;
typedef wages base, *p; // base is a synonym for double, p for double*

// also we can use alias declarations:
using SI = Sales_item; // SI is a synonym for Sales_item