/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Array_2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

/**
 *
 * @author admin
 */
public class StudentManage {

    private ArrayList ListStudent;

    public StudentManage() {
        ListStudent = new ArrayList(30);
    }

    public void AddStudent(Student stu) {
        ListStudent.add(stu);
    }

    public void InputList(Scanner sc) {
        Student stu;

        System.out.println("Input number student: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.println("Input Student " + (i + 1) + ": ");
            stu = new Student();
            stu.input();
            AddStudent(stu);
        }
    }

    public void renderList() {
        System.out.println("Show array student: ");
        int i = 1;
        for (Student stu : ListStudent) {
            System.out.println("Sinh vien thu " + i + " la:");
            stu.render();
            i++;
        }
    }
}
