/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BT_Loop;

import java.util.Scanner;
import java.lang.ArithmeticException;

/**
 *
 * @author admin
 */
public class Loop_8 {

    public static void main(String[] args) {
        int n, m;
        int max = 0;
        Scanner sc = new Scanner(System.in);
        System.out.format("Input number 1: ");
        n = sc.nextInt();
        System.out.format("Input number 2: ");
        m = sc.nextInt();
        if (n >= m) {
            for (int i = 1; i <= m; i++) {
                if (n % i == 0 && m % i == 0) {
                    if (i > max) {
                        max = i;
                    }
                }
            }
        } else {
            for (int i = 1; i <= n; i++) {
                if (n % i == 0 && m % i == 0) {
                    if (i > max) {
                        max = i;
                    }
                }
            }

        }

        System.out.println("Greatest common divisor: " + max);

    }
}
