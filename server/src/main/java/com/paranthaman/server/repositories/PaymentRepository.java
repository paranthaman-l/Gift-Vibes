package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String>{
    
}
