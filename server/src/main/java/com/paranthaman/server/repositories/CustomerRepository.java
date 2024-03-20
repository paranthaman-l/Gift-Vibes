package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    
}
