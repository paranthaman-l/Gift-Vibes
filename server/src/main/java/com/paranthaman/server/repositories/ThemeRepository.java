package com.paranthaman.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.server.models.Theme;

public interface ThemeRepository extends JpaRepository<Theme, String> {

}
