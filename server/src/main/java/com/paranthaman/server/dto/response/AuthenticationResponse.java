package com.paranthaman.server.dto.response;

import com.paranthaman.server.models.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String uid;
    private Role role;
    private String error;
    
}
