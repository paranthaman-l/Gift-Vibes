package com.paranthaman.server.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class AdminController {
    
    @GetMapping("/")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
}
