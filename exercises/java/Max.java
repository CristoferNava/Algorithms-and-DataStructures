// Encontrar los dos valores más grandes de diez números mientras son introducidos
// por el usuario

import java.util.Scanner;

public class Max {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number;
        int max;
        int secondMax;
        int temp;

        System.out.print("Introduzca un entero: ");
        max = input.nextInt();
        
        System.out.print("Introduzca un entero: ");
        secondMax = input.nextInt();

        // check the max and the secondMax
        if (secondMax > max) {
            temp = max;
            max = secondMax;
            secondMax = temp;
        }

        for (int i = 1; i <= 8; i++) {
            System.out.print("Introduzca un entero: ");
            number = input.nextInt();

            if (number > max) {
                temp = max;
                max = number;
                secondMax = temp;
            } else if (number > secondMax) {
                secondMax = number;
            }
        }

        System.out.printf("El mayor número es: %d\n", max);
        System.out.printf("El segundo númer mayor es: %d\n", secondMax);
    }
}

// 4, 5, , 12, -2, 4, 5, 11, 9, 10, 4