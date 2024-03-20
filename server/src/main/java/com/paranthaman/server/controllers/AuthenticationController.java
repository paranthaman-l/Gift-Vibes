package com.paranthaman.server.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import com.paranthaman.server.constant.Api;
import com.paranthaman.server.dto.request.LoginDTO;
import com.paranthaman.server.dto.request.LoginWithGoogleDTO;
import com.paranthaman.server.dto.request.SignUpDTO;
import com.paranthaman.server.dto.request.SignUpWithGoogle;
import com.paranthaman.server.dto.response.AuthenticationResponse;
import com.paranthaman.server.services.AuthService;
@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class AuthenticationController {

    private final AuthService authService;
    
    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignUpDTO request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginDTO request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }
    
    @PostMapping("/signUpWithGoogle")
    public ResponseEntity<String> authenticateGoogleAccount(@RequestBody SignUpWithGoogle request) {
        boolean isRegistered = authService.userRegistrationWithGoogle(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }
    @PostMapping("/loginWithGoogle")
    public ResponseEntity<AuthenticationResponse> authenticateGoogleAccount(@RequestBody LoginWithGoogleDTO request) {
        return ResponseEntity.ok(authService.userAuthenticationWithGoogle(request));
    }
}
