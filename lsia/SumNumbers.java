public class SumNumbers {
  public static int sumNumbers(int[] arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  public static void main(String[] args) {
    int[] numbers = new int[100];
    for (int i = 0; i < numbers.length; i++) {
      numbers[i] = i + 1;
    }

    System.out.println(sumNumbers(numbers));
  }
}