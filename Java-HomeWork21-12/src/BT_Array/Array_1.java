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
public class Array_1 {

    public static void main(String[] args) {
        int[] arr = new int[100];
        Scanner sc = new Scanner(System.in);
        int n;
        int sum = 0;
        do {
            System.out.format("Input number array length 1-100: ");
            n = sc.nextInt();
        } while (n < 1 || n > 100);
        {
            System.out.println("Input " + n + " array element");
            for (int i = 1; i <= n; i++) {
                System.out.format("Array element " + i + ": ");
                arr[i] = sc.nextInt();
            }
            System.out.print("Array input: ");
            for (int i = 1; i <= n; i++) {
                System.out.print(arr[i] + " ");
            }
            for (int i = 1; i <= n; i++) {
                if(arr[i]%2 !=0){
                    sum += arr[i];
                }
            }
            System.out.print("\nSum odd in array: " + sum);
        }
    }
}
