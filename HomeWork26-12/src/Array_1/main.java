/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Array_1;

import java.util.Scanner;

/**
 *
 * @author admin
 */
public class main {

    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        student[] arr = new student[30];
        do {
            System.out.print("Input number student: ");
            n = sc.nextInt();
        } while (n < 0 || n > 30);
        {
            for (int i = 0; i < n; i++) {
                System.out.println("Input Student " + (i + 1) + ": ");
                arr[i] = new student();
                arr[i].input();
            }
            System.out.println("Show array student: ");
            for (int i = 0; i < n; i++) {
                arr[i].render();
            }
        }

    }
}
