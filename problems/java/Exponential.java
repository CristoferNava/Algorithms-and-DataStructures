// Calcualte e^x

public class Exponential {
    public static void main(String[] args) {
        System.out.printf("%.5f", exNumber(2, 10));
    }

    public static int factorial(int n) {
        int factorial = 1;

        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static double exNumber(int x, int items) {
        double sum = 1;

        for (int i = 1; i <= items; i++) {
            sum += Math.pow(x, i) / factorial(i);
        }

        return sum;
    }
}