/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BT_Loop;

/**
 *
 * @author admin
 */
public class Loop_5 {

    public static void main(String[] args) {
        System.out.println("Multiplication table 2-9:");
        System.out.println("---------------------------------");
        for (int i = 2; i <= 10; i++) {
            for (int j = 1; j <= 10; j++) {
                System.out.format(" " + i*j);
            }
            System.out.println("");
        }
    }
}
