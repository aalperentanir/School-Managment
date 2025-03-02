package com.alialperen.schoolmanagment.dto;

import java.util.Date;

import com.alialperen.schoolmanagment.enums.UserRole;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
public class StudentDto {

	
	private long id;
	
	private String name;
	
	private String email;
	
	private String password;
	
	
	private String studentClass;
	
	private Date birthDate;
	
	private String address;
	
	private String gender;
}
