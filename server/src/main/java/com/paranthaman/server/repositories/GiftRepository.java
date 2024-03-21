package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Gift;

public interface GiftRepository extends  JpaRepository<Gift,String> {
    
}
