/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examjava1;

import java.util.TreeMap;

/**
 *
 * @author admin
 */
public class PhoneBookManager {

    TreeMap<String, String> phonebook;

    public PhoneBookManager() {
        phonebook = new TreeMap<>();
    }

    public boolean Insert(String name, String phone) {
        if (name.equals("") || phone.equals("")) {
            return false;
        }
        if (phonebook.containsKey(name)) {//nếu từ tiếng anh đã có
            return false;
        }
        phonebook.put(name, phone);
        return true;
    }

    public void Render() {
        for (String name : phonebook.keySet()) {
            String phone = phonebook.get(name);
            System.out.println(name + ":" + phone);
        }
    }

    public String Search(String name) {
        if (phonebook.containsKey(name) == false || phonebook.isEmpty()) {
            return "";
        }
        return phonebook.get(name);
    }

    public boolean Edit(String name, String phone) {
        if (phonebook.containsKey(name)) {
            phonebook.put(name, phone);
            return true;
        }
        return false;
    }

    public boolean remove(String name) {
        if (phonebook.containsKey(name)) {
            phonebook.remove(name);
            return true;
        }
        return false;
    }

}
