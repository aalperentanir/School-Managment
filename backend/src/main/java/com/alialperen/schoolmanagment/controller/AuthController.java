package com.alialperen.schoolmanagment.controller;

import java.io.IOException;
import java.util.Optional;

import com.alialperen.schoolmanagment.dto.AuthResponse;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alialperen.schoolmanagment.config.JwtUtils;
import com.alialperen.schoolmanagment.dto.AuthRequest;
import com.alialperen.schoolmanagment.entities.User;
import com.alialperen.schoolmanagment.repository.UserRepository;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
	
	private final AuthenticationManager authManager;
	
	private final UserDetailsService userDetailsService;
	
	private final JwtUtils jwtUtils;
	
	private final UserRepository userRepository;
	
	public static final String TOKEN_PREFIX = "Bearer ";
	
	public static final String HEADER_STRING = "Authorization";
	
	
	@PostMapping("/authenticate")
	public AuthResponse createAuthToken(@RequestBody AuthRequest req, HttpServletResponse res) throws IOException, JSONException {
		
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));
			
		}catch(BadCredentialsException e) {
			throw new BadCredentialsException("Incorrect username or Password");
		}catch(DisabledException ex) {
			res.sendError(HttpServletResponse.SC_NOT_FOUND,"User is not created");
			return null;
		}
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(req.getEmail());
		Optional<User> optUser = userRepository.findByEmail(userDetails.getUsername());
		final String jwt = jwtUtils.generateToken(userDetails);

		AuthResponse authResponse = new AuthResponse();
		authResponse.setToken(jwt);
		authResponse.setRole(optUser.get().getRole());



		return authResponse;

	}

}
