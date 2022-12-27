/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Array_2;

import java.util.Comparator;

/**
 *
 * @author admin
 */
public class sortPoint implements Comparator<Student> {

    @Override
    public int compare(Student student1, Student student2) {
        return (int) (student1.getPoint() - student2.getPoint());
    }
}
