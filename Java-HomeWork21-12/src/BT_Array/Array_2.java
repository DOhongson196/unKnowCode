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
public class Array_2 {

    public static void main(String[] args) {
        double[] arr = new double[100];
        Scanner sc = new Scanner(System.in);
        int n;
        int sum = 0;
        do {
            System.out.print("Input number array length 1-100: ");
            n = sc.nextInt();
        } while (n < 1 || n > 100);
        {
            System.out.println("Input " + n + " array element");
            for (int i = 1; i <= n; i++) {
                System.out.print("Array element " + i + ": ");
                arr[i] = sc.nextDouble();
            }
            System.out.print("Array input: ");
            for (int i = 1; i <= n; i++) {
                System.out.print(arr[i] + " ");
            }
            for (int i = 1; i <= n; i++) {
                if (arr[i] < 0) {
                    sum += arr[i];
                }
            }
            System.out.print("\nSum negative number in array: " + sum);
        }
    }
}
