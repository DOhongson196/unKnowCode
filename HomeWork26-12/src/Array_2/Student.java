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
public class Student {

    private String Student_code;
    private String Full_name;
    private double Point;

    public Student() {
    }

    public Student(String code, String name, double point) {
        this.Student_code = code;
        this.Full_name = name;
        this.Point = point;
    }

    public void input() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input student code: ");
        Student_code = sc.nextLine();
        System.out.println("Input full name: ");
        Full_name = sc.nextLine();
        System.out.println("Input point: ");
        Point = sc.nextDouble();
    }

    public void render() {
        System.out.println("Student code: " + Student_code + " Full name: " + Full_name + " Point: " + Point);
    }

    public String getFull_name() {
        return Full_name;
    }

    public double getPoint() {
        return Point;
    }

}
