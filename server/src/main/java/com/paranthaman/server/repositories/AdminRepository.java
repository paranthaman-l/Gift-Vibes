package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {
    
}