package com.paranthaman.server.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;
import com.paranthaman.server.dto.request.UpdateProfile;
import com.paranthaman.server.models.Admin;
import com.paranthaman.server.models.Customer;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.models.Order;
import com.paranthaman.server.models.Payment;
import com.paranthaman.server.models.Theme;
import com.paranthaman.server.services.AdminService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class AdminController {
    
    private final AdminService adminService;

    @GetMapping("/getById")
    public Admin getUserById(@RequestParam String uid) {
        return adminService.getUserById(uid);
    }
    
    @GetMapping("/getCustomer")
    public List<Customer> getCustomer() {
        return adminService.getAllCustomer();
    }
    
    @PutMapping("/updateProfile")
    public String updateProfile(@RequestBody UpdateProfile updateProfile) {
        return adminService.updateProfile(updateProfile.getUid(),updateProfile.getProfile());
    }
    
    //Theme
    
    @PostMapping("/theme")
    public String addTheme(@RequestBody Theme theme) {
        return adminService.addTheme(theme);
    }
    
    @PutMapping("theme/{tid}")
    public String putTheme(@PathVariable String tid, @RequestBody Theme theme) {
        return adminService.updateTheme(tid, theme);
    }

    @DeleteMapping("theme/{tid}")
    private String deleteTheme(@PathVariable String tid){
        return adminService.deleteTheme(tid);
    }

    //Gift
    
    @GetMapping("/gift")
    public List<Gift> getAllGifts() {
        return adminService.getAllGifts();
    }
    
    @GetMapping("/getGiftById")
    public Gift getGifts(@RequestParam String gid) {
        return adminService.getGifts(gid);
    }

    @PostMapping("/gift")
    public String addGift(@RequestBody Gift gift) {
        return adminService.addGift(gift);
    }
    
    @PutMapping("gift/{gid}")
    public String putGift(@PathVariable String gid, @RequestBody Gift gift) {
        return adminService.updateGift(gid, gift);
    }

    @DeleteMapping("gift/{gid}")
    private String deleteGift(@PathVariable String gid){
        return adminService.deleteGift(gid);
    }

    //Order
    @GetMapping("/order")
    public List<Order> getAllOrders() {
        return adminService.getAllOrders();
    }
    
    //Payment
    @GetMapping("/payment")
    public List<Payment> getAllPayments() {
        return adminService.getAllPayments();
    }
    


}
