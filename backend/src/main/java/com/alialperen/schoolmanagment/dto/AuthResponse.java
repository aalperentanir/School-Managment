package com.alialperen.schoolmanagment.dto;

import com.alialperen.schoolmanagment.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {

	private String token;

	private UserRole role;
}
