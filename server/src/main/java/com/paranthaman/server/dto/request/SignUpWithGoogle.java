package com.paranthaman.server.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpWithGoogle {
    private String username;
    private String profile;
    private String email;
    private String role;
}