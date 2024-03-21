package com.paranthaman.server.services;

import org.springframework.stereotype.Service;

import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.repositories.OrderRepository;
import com.paranthaman.server.repositories.PaymentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;

    public String addOrder(Order order) {
        try{
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

}
