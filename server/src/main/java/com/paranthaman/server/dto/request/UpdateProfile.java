package com.paranthaman.server.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * UpdateProfile
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateProfile {
    private String uid;
    private String profile;
}