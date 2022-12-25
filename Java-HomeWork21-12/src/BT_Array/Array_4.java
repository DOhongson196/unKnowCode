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
public class Array_4 {
        public static void main(String[] args) {
        double[] arr = new double[100];
        Scanner sc = new Scanner(System.in);
        int n;
        double min= arr[0];
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
                if(arr[i]<min){
                    min =  arr[i];
                }
            }
            System.out.print("\nSum negative number in array: " + min);
        }
    }
}
