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
public class Array_5 {

    public static void main(String[] args) {
        int n;
        int[] arr = new int[100];
        Scanner sc = new Scanner(System.in);
        int max = 0;
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
            for (int i = 1; i <= n; i++) {
                if(Math.sqrt(arr[i])*Math.sqrt(arr[i])==arr[i]){
                    max++;
                }
            }
            System.out.print("\nPerfect square: " + max);
        }
    }
}
