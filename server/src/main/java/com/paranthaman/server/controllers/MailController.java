package com.paranthaman.server.controllers;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.server.constant.Api;
import com.paranthaman.server.dto.request.SignUpDTO;
import com.paranthaman.server.dto.response.APIResponse;
import com.paranthaman.server.models.User;
import com.paranthaman.server.repositories.UserRepository;
import com.paranthaman.server.services.MailService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.MAIL)
@CrossOrigin("*")

@RequiredArgsConstructor
public class MailController {
    private final MailService mailService;
    private final UserRepository userRepository;

    @PostMapping("/signup/send-otp")
    public ResponseEntity<APIResponse> sendOtpForSignUp(@RequestBody SignUpDTO signUpDTO) throws IOException {
        User isExistEmail = userRepository.findByEmail(signUpDTO.getEmail()).orElse(null);
        if (isExistEmail == null) {
            try {
                String otp = generateRandomOtp();
                APIResponse apiResponse = mailService.sendOtpEmailForSignUP(signUpDTO.getEmail(),
                        signUpDTO.getUsername(), otp);
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            } catch (MessagingException e) {
                APIResponse apiResponse = new APIResponse();
                apiResponse.setStatus(500);
                apiResponse.setError("Failed to send OTP");
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            }
        }
        APIResponse apiResponse = new APIResponse();
        apiResponse.setError("Already Registered email address");
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }

}
