package com.alialperen.schoolmanagment.dto;

import java.util.Date;

import lombok.Data;

@Data
public class TeacherDto {
	
private Long id;
	
	private String name;
	
	private String gender;
	
	private String department;
	
	private String address;
	
	private Date birthDate;
	
	private String qualification;

}
