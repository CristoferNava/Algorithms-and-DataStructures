#include <stdio.h>
#include <math.h>

int main() {
    int number, numberToDigits, numberToDivide, digits = 0;

    printf("Dame un número: ");
    scanf("%d", &number);
    numberToDigits = number;
    numberToDivide = number;

    while (numberToDigits != 0) {
        numberToDigits /= 10;
        digits++;
    }

    int i = 0;
    int sum = 0;
    while (numberToDivide != 0) {
        sum += (int) pow(numberToDivide % 10, digits);
        numberToDivide /= 10;
        i++;
    }

    if (sum == number) {
        printf("Armstrong");
    } else {
        printf("No es Armstrong");
    }

    printf("\n");
    return 0;
}