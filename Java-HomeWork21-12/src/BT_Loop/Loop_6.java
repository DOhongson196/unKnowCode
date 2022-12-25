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
public class Loop_6 {

    public static void main(String[] args) {
        int n,factorial=1;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("Input integer number");
            n = sc.nextInt();
        } while (n < 0);
        {
            for(int i=n;i>0;i--){
                factorial *=i;
            }
            System.out.println("Factorial of " + n + " is: " +factorial);
        }
    }
}