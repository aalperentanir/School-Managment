package com.alialperen.schoolmanagment.entities;

import java.util.Date;

import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.enums.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Users")
@Data
public class User {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="role")
	private UserRole role;
	
	private String studentClass;
	
	private Date birthDate;
	
	private String address;
	
	private String gender;
	
	public StudentDto getStudentDto() {
		StudentDto sDto = new StudentDto();
		sDto.setId(id);
		sDto.setAddress(address);
		sDto.setBirthDate(birthDate);
		sDto.setEmail(email);
		sDto.setName(name);
		sDto.setGender(gender);
		sDto.setStudentClass(studentClass);
		
		return sDto;
	}

}
