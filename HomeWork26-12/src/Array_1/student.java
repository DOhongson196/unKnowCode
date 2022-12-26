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
public class student {

    String student_code;
    String full_name;
    double point;

    public student() {
    }

    public student(String studentc, String fname, double point) {
        this.student_code = studentc;
        this.full_name = fname;
        this.point = point;
    }

    public void input() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input student code: ");
        student_code = sc.nextLine();
        System.out.println("Input student full-name: ");
        full_name = sc.nextLine();
        System.out.println("Input student point: ");
        point = sc.nextDouble();
    }
    
    public void render() {
        System.out.println("Full-Name: " + full_name + " Student-code: " + student_code + " Point: " + point);
    }

}
