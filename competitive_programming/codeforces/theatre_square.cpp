#include <iostream>

using namespace std;

int main() {
    long double n, m;
    long double a; 
    cin >> n >> m >> a;

    n /= a;
    if ((long long int)n != n) n++;
    n = (long long int)n;
    

    m /= a;
    if ((long long int)m != m) m++;
    m = (long long int)m;

    cout << (long long int)(n * m) << "\n";
}