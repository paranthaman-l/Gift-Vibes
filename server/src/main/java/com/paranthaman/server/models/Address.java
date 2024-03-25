package com.paranthaman.server.models;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
// @Entity
@Table(name = "_address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String addId;
}
