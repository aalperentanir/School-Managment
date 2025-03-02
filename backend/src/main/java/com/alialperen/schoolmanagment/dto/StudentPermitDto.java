package com.alialperen.schoolmanagment.dto;

import java.util.Date;

import com.alialperen.schoolmanagment.enums.StudentPermitStatus;

import lombok.Data;

@Data
public class StudentPermitDto {
	
    private long id;
	
	private String subject;
	
	private String body;
	
	private Date date;
	
	private StudentPermitStatus studentPermitStatus;
	
	private Long userid;
	

}
