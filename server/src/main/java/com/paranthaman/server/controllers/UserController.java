package com.paranthaman.server.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;
import com.paranthaman.server.dto.request.UpdateProfile;
import com.paranthaman.server.models.Admin;
import com.paranthaman.server.models.Customer;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.models.User;
import com.paranthaman.server.models.enumerate.Role;
import com.paranthaman.server.services.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    @GetMapping("/getById")
    public Customer getUserById(@RequestParam String uid) {
        return userService.getUserById(uid);
    }

    @GetMapping("/getFeaturedGift")
    public List<Gift> geGifts() {
        return userService.getFeaturedGift();
    }

    @GetMapping("/getProduct")
    public Gift getProduct(@RequestParam String pid) {
        return userService.getProduct(pid);
    }

    @PutMapping("/updateProfile")
    public String updateProfile(@RequestBody UpdateProfile updateProfile) {
        return userService.updateProfile(updateProfile.getUid(), updateProfile.getProfile());
    }

    // Orders

    @PostMapping("/order")
    public String addOrder(@RequestBody Order order, @RequestParam String uid, @RequestParam List<String> gids) {
        return userService.addOrder(order, uid, gids);
    }

    @PutMapping("/order/{oid}")
    public String putOrder(@PathVariable String oid, @RequestBody Order order) {
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

    @PostMapping("addWishList")
    public String addWishList(@RequestParam String uid, @RequestBody String gid) {

        return userService.addWishList(uid, gid);
    }
}