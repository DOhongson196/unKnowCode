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
public class studentManager {

    public student[] arr = new student[30];
    int n;

    public studentManager() {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new student();
        }
    }

    public void inputStudentList() {
        Scanner sc = new Scanner(System.in);
        do {
            System.out.print("Nhập số sinh viên (1-30):");
            n = sc.nextInt();
        } while (n <= 0 || n > 30);
        System.out.println("Nhập " + n + " sinh viên");
        for (int i = 0; i < n; i++) {
            System.out.println("Nhập sinh viên thứ " + (i + 1) + ":");
            arr[i].input();
        }

    }

    public void renderStudentList() {
        for (int i = 0; i < n; i++) {
            //System.out.println("sinh viên thứ " + (i+1) +":");
            arr[i].render();
        }
    }

    public void sortByPoint() {
        for(int i=0; i<n-1;i++)
        {
            for(int j=i+1; j<n;j++)
            {
                student temp;
                if(arr[i].getPoint() > arr[j].getPoint())
                {
                    temp = arr[i];
                    arr[i]= arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}
