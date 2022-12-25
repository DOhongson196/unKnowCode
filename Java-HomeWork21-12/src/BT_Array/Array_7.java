/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BT_Array;

import java.util.Scanner;

/**
 *
 * @author admin
 */
public class Array_7 {

    public static void main(String[] args) {
        int n;
        double[] arr = new double[100];
        Scanner sc = new Scanner(System.in);
        do {
            System.out.print("Input number array length 1-100: ");
            n = sc.nextInt();
        } while (n < 0 || n > 100);
        {
            System.out.println("Input " + n + " array element");
            for (int i = 1; i <= n; i++) {
                System.out.print("Array element " + i + ": ");
                arr[i] = sc.nextInt();
            }
            System.out.print("Array input: ");
            for (int i = 1; i <= n; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.print("\nArray reverse: ");
            for (int i = 1; i <= n/ 2; i++) {
                double temp = arr[i];
                arr[i] = arr[n - i + 1];
                arr[n - i + 1] = temp;
            }
            for (int i = 1; i <= n; i++) {
                System.out.print(arr[i] + " ");
            }

        }
    }
}
