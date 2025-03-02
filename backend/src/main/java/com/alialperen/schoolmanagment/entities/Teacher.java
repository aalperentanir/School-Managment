package com.alialperen.schoolmanagment.entities;

import java.util.Date;

import com.alialperen.schoolmanagment.dto.TeacherDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="Teachers")
public class Teacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String gender;
	
	private String department;
	
	private String address;
	
	private Date birthDate;
	
	private String qualification;
	
	
	public TeacherDto getTeacherDto() {
		TeacherDto teacherDto = new TeacherDto();
		teacherDto.setName(name);
		teacherDto.setId(id);
		teacherDto.setAddress(address);
		teacherDto.setBirthDate(birthDate);
		teacherDto.setGender(gender);
		teacherDto.setDepartment(department);
		teacherDto.setQualification(qualification);
		
		return teacherDto;
		
	}
	

}
