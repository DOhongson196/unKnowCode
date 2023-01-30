/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Array_2;

import java.util.Scanner;

/**
 *
 * @author admin
 */
public class student {

    private String studentId;
    private String name;
    private double point;

    public student() {

    }

    public student(String id, String name, double point) {
        this.studentId = id;
        this.name = name;
        this.point = point;
    }

    public double getPoint() {
        return point;
    }


    public void input() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input student code: ");
        studentId = sc.nextLine();
        System.out.println("Input student full-name: ");
        name = sc.nextLine();
        System.out.println("Input student point: ");
        point = sc.nextDouble();
    }
    
    public void render(){
        System.out.println("Full-Name: " + name + " Student-code: " + studentId + " Point: " + point);
    }
    
}
