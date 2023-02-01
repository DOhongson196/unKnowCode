/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examtest;

/**
 *
 * @author admin
 */
public class ExamTest {
    public static void main(String[] args) {
        // TODO code application logic here
        Book BookDemo = new Book("Naruto", 55.5, new Author("Son", "Do"));
        System.out.println(BookDemo);
    }
    
}
