public class Euler {
    public static void main(String[] args) {
        System.out.printf("%.5f\n", eNumber(10));
    }

    public static int factorial(int n) {
        int factorial = 1;

        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static double eNumber(int n) {
        double sum = 1;

        for (int i = 1; i <= n; i++) {
            sum += 1 / (double) factorial(i);
        }

        return sum;
    }
}