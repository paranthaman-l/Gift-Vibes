package com.paranthaman.server.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;
import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.services.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class UserController {
    
    private final UserService userService;

    // Orders

    @PostMapping("/order")
    public String addOrder(@RequestBody Order order) {
        return userService.addOrder(order);
    }

    @PutMapping("/order/{oid}")
    public String putOrder(@PathVariable String oid,@RequestBody Order order) {
        return userService.putOrder(order);
    }

    @DeleteMapping("/order/{oid}")
    public String deleteOrder(@PathVariable String oid) {
        return userService.deleteOrder(oid);
    }
    
    // Payment
    @PostMapping("/payment")
    public boolean makePayment(@RequestBody Payment payment) {
        return userService.makePayment(payment);
    }
    
}
