/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examjava1;

import java.util.Scanner;

/**
 *
 * @author admin
 */
public class ExamJava1 {
    public static int Menu(){
        int ch;
        while(true){
            try{
                Scanner input = new Scanner(System.in);
                System.out.println("PhoneBook StoresName - PhoneNumber"
                    + "\n1.Insert\n2.Render"
                    +"\n3.Search\n4.Edit\n5.Remove từ\n6.Exit"
                    +"\nChooice number:");
                ch = input.nextInt();
                return ch;
            }
            catch (java.util.InputMismatchException e){
                System.out.println("Wrong Input");
                System.out.println(e.getMessage());
                continue;
            }
        }
    }
    public static void main(String[] args) {
        int ch;
        Scanner input = new Scanner(System.in);
        PhoneBookManager phonebook = new PhoneBookManager();
        String name,phone;
        boolean b;
        do{
            ch = Menu();
            switch(ch){
                case 1:
                    System.out.println("StoresName:");
                    name = input.nextLine();
                    System.out.println("PhoneNumbe:");
                    phone = input.nextLine();
                    b = phonebook.Insert(name, phone);
                    if(!b){
                        System.out.println("Wrong insert");
                    }
                    break;
                case 2:
                    System.out.println("BookPhone:");
                    phonebook.Render();
                    break;
                case 3:
                    System.out.println("StoresName:");
                    name = input.nextLine();
                    phone = phonebook.Search(name);
                    if(phone.equals("")){
                        System.out.println("No StoresName '" + name + "'");
                    }
                    else{
                        System.out.println("PhoneNumber: " + phone);
                    }
                    break;
                case 4:
                    System.out.println("StoresName:");
                    name = input.nextLine();
                    System.out.println("PhoneNUmber:");
                    phone =input.nextLine();
                    b = phonebook.Edit(name, phone);
                    if(!b){
                        System.out.println("No StoresName : " + name);
                    }
                    break;
                case 5:
                    System.out.println("StoresName:");
                    name = input.nextLine();
                    b = phonebook.remove(name);
                    if(!b){
                        System.out.println("No StoresName: " + name);
                    }
                    break;
                case 6:
                    System.out.println("Good bye!");
                    break;
                default:
                    System.out.println("Choose agains!");
            }
        }while(ch!=6);
    }
    
}
