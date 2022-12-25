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
public class Loop_9 {

    public static void main(String[] args) {
        int n, m, k;
        int min = 0;
        int max = 0;
        Scanner sc = new Scanner(System.in);
        System.out.format("Input number 1: ");
        n = sc.nextInt();
        min = n;
        System.out.format("Input number 2: ");
        m = sc.nextInt();
        if (min > m) {
            min = m;
        }
        System.out.format("Input number 3: ");
        k = sc.nextInt();
        if (min > k) {
            min = k;
        }
        for(int i = 1;i<=min;i++){
            if(n%i==0 && m%i==0 && k%i==0){
                if(i>max){
                    max = i;
                }
            }
        }
        System.out.println("Greatest common divisor: "+max);
    }
}
