package com.paranthaman.server.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import com.paranthaman.server.constant.Api;
import com.paranthaman.server.dto.request.LoginDTO;
import com.paranthaman.server.dto.request.LoginWithGoogleDTO;
import com.paranthaman.server.dto.request.SignUpDTO;
import com.paranthaman.server.dto.request.SignUpWithGoogle;
import com.paranthaman.server.dto.response.AuthenticationResponse;
import com.paranthaman.server.models.Gift;
import com.paranthaman.server.services.AuthService;
import com.paranthaman.server.services.UserService;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class AuthenticationController {

    private final AuthService authService;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody SignUpDTO request) {
        boolean isRegistered = authService.userRegistration(request);
        AuthenticationResponse response = null;
        try{
            var login = LoginDTO.builder().email(request.getEmail()).password(request.getPassword()).build();
            response = authService.userAuthentication(login);
        }catch(Exception e){
            
        }
        return isRegistered ? ResponseEntity.ok(response)
                : ResponseEntity.badRequest().body("Already Registered Email!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginDTO request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

    @PostMapping("/signUpWithGoogle")
    public ResponseEntity<?> authenticateGoogleAccount(@RequestBody SignUpWithGoogle request) {
        boolean isRegistered = authService.userRegistrationWithGoogle(request);
        var login = LoginWithGoogleDTO.builder().email(request.getEmail()).build();
        AuthenticationResponse response = null;
        try {
            response = authenticateGoogleAccountEmail(login);
        } catch (Exception e) {

        }
        return isRegistered ? ResponseEntity.ok(response)
                : ResponseEntity.badRequest().body("Already Registered Email!");
    }

    @PostMapping("/loginWithGoogle")
    public ResponseEntity<AuthenticationResponse> authenticateGoogleAccount(@RequestBody LoginWithGoogleDTO request) {
        return ResponseEntity.ok(authService.userAuthenticationWithGoogle(request));
    }

    public AuthenticationResponse authenticateGoogleAccountEmail(LoginWithGoogleDTO request) {
        return authService.userAuthenticationWithGoogle(request);
    }

    
    @GetMapping("/getFeaturedGift")
    public List<Gift> geGifts(){
        return userService.getFeaturedGift();
    }

    
    @GetMapping("/getProduct")
    public Gift getProduct(@RequestParam String pid){
        return userService.getProduct(pid);
    }

}
