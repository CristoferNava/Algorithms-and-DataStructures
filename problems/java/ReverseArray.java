import java.lang.reflect.Array;
import java.util.Arrays;

// Given an array A, of N integers, print each element in reverse order as 
// single of space-separed integers.


public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverseArray(arr);
    }

    public static void reverseArray(int[] arr) {
        var reversedArray = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            reversedArray[i] = arr[arr.length - 1 - i];
        }

        // Print the reversed array
        System.out.println(Arrays.toString(reversedArray));
    }
}