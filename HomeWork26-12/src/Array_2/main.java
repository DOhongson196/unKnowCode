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
public class main {

    public static int menu() {
        Scanner sc = new Scanner(System.in);
        int ch;
        System.out.println("Menu chương trình:");
        System.out.println("1. Input student list ");
        System.out.println("2. Render student list");
        System.out.println("3. Sort by point");
        System.out.println("4. Exit");
        System.out.println("Choice number (1-4):");
        ch = sc.nextInt();
        return ch;
    }

    public static void main(String[] args) {
        studentManager list = new studentManager();
        int ch;
        //lặp toàn bộ hàm main cho đến khi nào chon==4 thì thoát và kết thúc
        do {
            //B1.hiển thị menu và lấy giá trị chọn
            ch = menu();//gọi hàm menu() và lưu giá trị trả về vào biến chọn
            //B2. Xử lý giá trị chọn và gọi chức năng tương ứng
            switch (ch) {
                case 1:
                    list.inputStudentList();
                    //chucnang.chucnang1();
                    break;
                case 2:
                    list.inputStudentList();
                    list.renderStudentList();
                    break;
                case 3:
                    list.inputStudentList();
                    list.renderStudentList();
                    list.sortByPoint();
                    list.renderStudentList();
                    break;
                case 4:
                    System.out.println("Good bye!!!");
                    break;
                default:
                    System.out.println("Wrong input! Input again");
            }
        } while (ch != 4);

    }

}

