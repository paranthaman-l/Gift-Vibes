package com.paranthaman.server.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.paranthaman.server.models.Customer;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.models.User;
import com.paranthaman.server.repositories.CustomerRepository;
import com.paranthaman.server.repositories.GiftRepository;
import com.paranthaman.server.repositories.OrderRepository;
import com.paranthaman.server.repositories.PaymentRepository;
import com.paranthaman.server.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final PaymentRepository paymentRepository;
    private final GiftRepository giftRepository;

    public String addOrder(Order order,String uid,List<String> gid) {
        try{
            order.setGifts(gid);
            order.setUid(uid);
            order.setCustomer(customerRepository.findById(uid).get());
            orderRepository.save(order);
        }catch(Exception e){
            return "Order not confirmed!";
        }
        return "Order Confirmed";
    }
    
    public String putOrder(Order order) {
        try{
            orderRepository.save(order);
        }catch(Exception e){
            return "Order not Updated!";
        }
        return "Order Updated";
    }
    
    public String deleteOrder(String oid) {
        try{
            orderRepository.deleteById(oid);
        }catch(Exception e){
            return "Order Not Canceled!";
        }
        return "Order Cancel Successfully";
    }

    public boolean makePayment(Payment payment) {
        try{
            paymentRepository.save(payment);
        }catch(Exception e){
            return false;
        }
        return true;
    }

    public Customer getUserById(String uid) {
        return customerRepository.findById(uid).get();
    }

    public List<Gift> getFeaturedGift() {
        return giftRepository.findAll();
    }

    public Gift getProduct(String pid) {
        return giftRepository.findById(pid).get();
    } 

}
