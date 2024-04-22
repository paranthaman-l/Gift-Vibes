package com.paranthaman.server.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.services.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.PRODUCT)
@RequiredArgsConstructor
@CrossOrigin("*")

public class ProductController {

    private final ProductService productService;

    @GetMapping("/gift")
    public List<Gift> getAllGifts() {
        return productService.getAllGifts();
    }

    @GetMapping("/getGiftById")
    public Gift getGifts(@RequestParam String gid) {
        return productService.getGifts(gid);
    }

    @PostMapping("/gift")
    public String addGift(@RequestBody Gift gift) {
        return productService.addGift(gift);
    }

    @PutMapping("gift/{gid}")
    public String putGift(@PathVariable String gid, @RequestBody Gift gift) {
        return productService.updateGift(gid, gift);
    }

    @DeleteMapping("gift/{gid}")
    private String deleteGift(@PathVariable String gid) {
        return productService.deleteGift(gid);
    }

}