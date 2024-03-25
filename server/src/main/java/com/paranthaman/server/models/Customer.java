package com.paranthaman.server.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {
    @Id
	private String cid;
	
	private String profile;

	@OneToMany(mappedBy = "customer")
    private List<Order> orders;

	private Set<String> wishList;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", referencedColumnName = "uid")
	private User user;
}