package com.paranthaman.server.services;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.paranthaman.server.dto.response.APIResponse;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public APIResponse sendOtpEmailForSignUP(String recipientEmail,String name, String otp) throws MessagingException,IOException {
        APIResponse apiResponse = new APIResponse();
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(recipientEmail);
        helper.setSubject("OTP Verification");
        String templatePath = "templates/signup_otp_email.html";
        Resource resource = new ClassPathResource(templatePath);
        String content = new String(Files.readAllBytes(Paths.get(resource.getURI())), StandardCharsets.UTF_8);
        content = content.replace("[Name]", name);
        content = content.replace("[OTP]", otp);
        helper.setText(content, true);
        javaMailSender.send(message);
        apiResponse.setData(otp);
        return apiResponse;
    }
}
