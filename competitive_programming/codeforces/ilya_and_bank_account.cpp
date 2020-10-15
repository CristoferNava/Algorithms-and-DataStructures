#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    if (n >= 0) {
        cout << n << endl;
        return 0;
    }
    
    n *= -1;
    int copy = n;
    int last = copy % 10;
    copy /= 10;
    int pen = copy % 10;

    if (last >= pen) {
        n -= last;
        n /= 10;
    } else {
        n -= pen * 10;
        n /= 10;
        n += last; 
    }
    n *= -1;

    cout << n << endl;
}