#include <iostream>

using namespace std;

int main() {
    int matrix[5][5];
    int p1, p2;
    int b1 = 2, b2 = 2;
    int steps = 0;

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            cin >> matrix[i][j];
            if (matrix[i][j] == 1) p1 = i, p2 = j; 
        }
    }

    // 1 (p1, p2)
    // first move p1 to the correct position
    // if p1 == b1 no hagas nada
    // if p1 < b1 incrementa p1 hasta llegar a b1 b1 - p1 
    // if p1 > b1 decrementa b1 hata llegar b1

    // rows
    if (p1 < b1) steps += b1 - p1;
    else if (p1 > b1) steps += p1 - b1;

    // cols
    if (p2 < b2) steps += b2 - p2;
    else if (p2 > b2) steps += p2 - b2;

    cout << steps << endl;
}