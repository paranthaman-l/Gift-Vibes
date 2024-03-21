package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Order;

public interface OrderRepository extends JpaRepository<Order,String> {
    
}
