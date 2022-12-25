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
public class Loop_7 {

    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        int temp = 0;
        do {
            System.out.format("Input ramdom number: ");
            n = sc.nextInt();
            if(temp < n){
                temp = n;
            }
        } while (n != 0);
        {
            System.out.println("Max number: " + temp);
        }
    }
}
