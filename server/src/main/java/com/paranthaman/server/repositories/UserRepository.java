package com.paranthaman.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String username);

}