package com.paranthaman.server.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.paranthaman.server.models.Gift;
import com.paranthaman.server.repositories.GiftRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final GiftRepository giftRepository;

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
        return "Gift added" + gift.getGid();
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

}
