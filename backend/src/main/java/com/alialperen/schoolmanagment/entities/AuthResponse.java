package com.alialperen.schoolmanagment.entities;

import lombok.Data;

@Data
public class AuthResponse {
    private String jwt;

    private String message;
}
