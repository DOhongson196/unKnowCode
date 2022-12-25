/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BT_Loop;

import java.util.Scanner;

/**
 *
 * @author admin
 */
public class Loop_4 {

    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("Input number 1-10:");
            n = sc.nextInt();
        } while (n < 0||n>10);
        {
            System.out.println("Multiplication table of " +n);
            for (int i = 1; i <= 10; i++) {
                System.out.println( n + "*" + i + "=" +n*i);
            }
        }
    }
}
