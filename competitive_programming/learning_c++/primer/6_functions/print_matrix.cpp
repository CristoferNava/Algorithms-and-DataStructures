#include <iostream>

using namespace std;

void printMatrix(int [][3], int);
void printMatrix2(int (*matrix)[3], int rowSize);

int main() {
    int matrix[4][3] = {{1, 2, 3}, 
                        {4, 5, 6},
                        {7, 8, 9},
                        {3, 2, 1}};
    printMatrix2(matrix, 3);
}

void printMatrix(int matrix[][3], int rowSize) {
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < rowSize; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

void printMatrix2(int (*matrix)[3], int rowSize) {
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < rowSize; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}