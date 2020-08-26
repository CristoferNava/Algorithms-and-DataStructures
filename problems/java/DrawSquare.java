import java.util.Scanner;

// Dibujar un cuadrado hueco dada una entrada por el usuario

public class DrawSquare {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Introduzca un entero: ");
        int number = input.nextInt();

        for (int row = 1; row <= number; row++) {
            if (row == 1 || row == number) {
                // Draw all the row
                for (int col = 1; col <= number; col++) {
                    System.out.print("* ");
                }
            } else {
                for (int col = 1; col <= number; col++) {
                    if (col == 1 || col == number) {
                        System.out.print("* ");
                    } else {
                        System.out.print("  ");
                    }
                }
            }
            
            System.out.println();
        }
    }
}