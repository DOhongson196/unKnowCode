/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BT_Loop;

import java.util.Scanner;
import java.lang.Math;

/**
 *
 * @author admin
 */
public class Loop_10 {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.format("Input integer Number: ");
        n = sc.nextInt();
        boolean check = true;
        if(n<2){
            check = false;
        }else{
            for(int i=2;i<=Math.sqrt(n);i++){
                if(n%i==0){
                    check = false;
                }
            }
        }
        if(check==true){
            System.out.println(n + " is prime number");
        }else{
            System.out.println(n + " is not prime number");
        }
    }
}
