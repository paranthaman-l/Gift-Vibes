package com.paranthaman.server.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.paranthaman.server.models.Admin;
import com.paranthaman.server.models.Customer;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.models.Theme;
import com.paranthaman.server.repositories.AdminRepository;
import com.paranthaman.server.repositories.CustomerRepository;
import com.paranthaman.server.repositories.GiftRepository;
import com.paranthaman.server.repositories.OrderRepository;
import com.paranthaman.server.repositories.PaymentRepository;
import com.paranthaman.server.repositories.ThemeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final CustomerRepository customerRepository;
    private final ThemeRepository themeRepository;
    private final GiftRepository giftRepository;
    private final OrderRepository orderRepository;
    private final AdminRepository adminRepository;
    private final PaymentRepository paymentRepository;


    
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    // Theme
    public String addTheme(Theme theme) {
        try {
            themeRepository.save(theme);
        } catch (Exception e) {
            return "Theme not added!";
        }
        return "Theme added";
    }

    public String updateTheme(String tid, Theme theme) {
        try {
            themeRepository.save(theme);
        } catch (Exception e) {
            return "Theme not edited!";
        }
        return "Theme edited";
    }

    public String deleteTheme(String tid) {
        try {
            themeRepository.deleteById(tid);
            ;
        } catch (Exception e) {
            return "Theme not deleted!";
        }
        return "Theme deleted";
    }

    // Gift
    public List<Gift> getAllGifts() {
        return giftRepository.findAll();
    }

    public Gift getGifts(String gid) {
        return giftRepository.findById(gid).get();
    }

    public String addGift(Gift gift) {
        try {
            giftRepository.save(gift);
        } catch (Exception e) {
            return "Gift not added!";
        }
        return "Gift added";
    }

    public String updateGift(String gid, Gift gift) {
        try {
            giftRepository.save(gift);
        } catch (Exception e) {
            return "Gift not edited!";
        }
        return "Gift edited";
    }

    public String deleteGift(String gid) {
        try {
            giftRepository.deleteById(gid);
            ;
        } catch (Exception e) {
            return "Gift not deleted!";
        }
        return "Gift deleted";
    }

    // Orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Admin getUserById(String uid) {
        return adminRepository.findById(uid).get();
    }


}
