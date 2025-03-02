package com.alialperen.schoolmanagment.service;

import java.util.List;

import com.alialperen.schoolmanagment.dto.SStudentDto;
import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.dto.StudentPermitDto;

public interface StudentService {

	SStudentDto getStudentById(long id) throws Exception;

	StudentPermitDto applyPermit(StudentPermitDto studentPermitDto);

	List<StudentPermitDto> getAllAppliedPermitsById(long studentId);

	StudentDto updateStudent(long studentId, StudentDto studentDto) throws Exception;

}
