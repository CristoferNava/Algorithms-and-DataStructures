#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int n2 = n;

    if (n % 4 == 0 || n % 7 == 0) {
        cout << "YES" << endl;
        return 0;
    }
    // check if the number only contains 4 or 7 (it is a lucky number)
    bool almost_lucky = true;
    while (n > 0) {
        if (n % 10 == 4 || n % 10 == 7) {
            n /= 10;
            continue;
        }
        almost_lucky = false;
        break;
    }
    if (almost_lucky) {
        cout << "YES" << endl;
        return 0;
    }

    // check if the number is divisible by a lucky number
    // we have to generate all the lucky numbers from 4 to n
    
    // generate the lucky numbers 4 < to n
    // vector<int> ln;
    for (int i = 4; i < n2; i++) {
        int ni = i; 
        bool lucky = true;
        while (ni > 0) {
            if (ni % 10 == 4 || ni % 10 == 7) {
                ni /= 10;
                continue;
            }
            lucky = false;
            break;
        }
        if (lucky) {
            // ln.push_back(i);
            printf("%d / %d = %d\n", n2, i, n2%i); 
            if (n2 % i == 0) {
                cout << "YES" << endl;
                return 0;
            }
        }
    }

    cout << "NO" << endl;
}