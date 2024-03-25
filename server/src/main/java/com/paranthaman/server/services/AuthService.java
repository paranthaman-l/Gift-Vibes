package com.paranthaman.server.services;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.paranthaman.server.dto.request.LoginDTO;
import com.paranthaman.server.dto.request.LoginWithGoogleDTO;
import com.paranthaman.server.dto.request.SignUpDTO;
import com.paranthaman.server.dto.request.SignUpWithGoogle;
import com.paranthaman.server.dto.response.AuthenticationResponse;
import com.paranthaman.server.models.Admin;
import com.paranthaman.server.models.Customer;
import com.paranthaman.server.models.User;
import com.paranthaman.server.models.enumerate.Role;
import com.paranthaman.server.repositories.AdminRepository;
import com.paranthaman.server.repositories.CustomerRepository;
import com.paranthaman.server.repositories.UserRepository;
import com.paranthaman.server.utils.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

/**
 * AuthService
 */
@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {
	private final UserRepository userRepository;
	private final AdminRepository adminRepository;
	private final CustomerRepository customerRepository;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManager authenticationManager;
	private final JwtUtil jwtUtil;

	public boolean userRegistration(SignUpDTO request) {
		Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
		if (!isUserExists.isPresent()) {
			var user = User.builder().name(request.getUsername()).email(request.getEmail())
					.password(passwordEncoder.encode(request.getPassword())).authType("password").isEnabled(true)
					.role(Role.valueOf(request.getRole().toUpperCase())).build();
			userRepository.save(user);
			if (request.getRole().toUpperCase().equals("ADMIN")) {
				var admin = Admin.builder().aid(user.getUid()).user(user).build();
				adminRepository.save(admin);
			} else if (request.getRole().toUpperCase().equals("USER")) {
				var customer = Customer.builder().cid(user.getUid()).user(user).build();
				customerRepository.save(customer);
			}
			return true;
		} else {
			return false;
		}
	}
	// @SuppressWarnings("null")
	public boolean userRegistrationWithGoogle(SignUpWithGoogle request) {
		Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
		if (!isUserExists.isPresent()) {
			var user = User.builder().name(request.getUsername()).email(request.getEmail())
					.authType("google").isEnabled(true)
					.role(Role.valueOf(request.getRole().toUpperCase())).build();
			userRepository.save(user);
			if (request.getRole().toUpperCase().equals("ADMIN")) {
				var admin = Admin.builder().aid(user.getUid()).profile(request.getProfile()).user(user).build();
				adminRepository.save(admin);
			} else if (request.getRole().toUpperCase().equals("USER")) {
				var customer = Customer.builder().cid(user.getUid()).profile(request.getProfile()).user(user).build();
				customerRepository.save(customer);
			}
			return true;
		} else {
			return false;
		}
	}

	public AuthenticationResponse userAuthentication(LoginDTO request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		var token = jwtUtil.generateToken(user);
		return AuthenticationResponse.builder().token(token).uid(user.getUid()).role(user.getRole()).build();
	}
	
	public AuthenticationResponse userAuthenticationWithGoogle(LoginWithGoogleDTO request) {
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		var token = jwtUtil.generateToken(user);
		return AuthenticationResponse.builder().token(token).uid(user.getUid()).role(user.getRole()).build();
	}
    public User getUserbyEmail(String email) {
        return userRepository.findByEmail(email).get();
    }
}