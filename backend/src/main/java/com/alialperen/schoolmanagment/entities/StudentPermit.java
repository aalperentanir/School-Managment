package com.alialperen.schoolmanagment.entities;

import java.util.Date;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.alialperen.schoolmanagment.dto.StudentPermitDto;
import com.alialperen.schoolmanagment.enums.StudentPermitStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="StudentPermits")
public class StudentPermit {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String subject;
	
	private String body;
	
	private Date date;
	
	private StudentPermitStatus studentPermitStatus;
	
	@ManyToOne(fetch=FetchType.LAZY, optional = false)
	@JoinColumn(name="user_id",nullable=false)
	@JsonIgnore
	@OnDelete(action=OnDeleteAction.CASCADE)
	private User user;
	
	
	public StudentPermitDto getStudentPermitDto() {
		StudentPermitDto permitDto = new StudentPermitDto();
		permitDto.setBody(body);
		permitDto.setDate(date);
		permitDto.setId(id);
		permitDto.setStudentPermitStatus(studentPermitStatus);
		permitDto.setId(user.getId());
		
		return permitDto;
		
		
	}
	

}
