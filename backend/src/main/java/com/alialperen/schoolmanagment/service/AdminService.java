package com.alialperen.schoolmanagment.service;

import java.util.List;

import com.alialperen.schoolmanagment.dto.FeeDto;
import com.alialperen.schoolmanagment.dto.SStudentDto;
import com.alialperen.schoolmanagment.dto.STeacherDto;
import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.dto.StudentPermitDto;
import com.alialperen.schoolmanagment.dto.TeacherDto;
import com.alialperen.schoolmanagment.entities.User;

public interface AdminService {

	
	public void createAdminAccount();


	public StudentDto postStudent(StudentDto studentDto);

	public List<StudentDto> getAllStudents();
	
	public void deleteStudent(long studentId);
	
	public SStudentDto getStudentById(long id) throws Exception;
	
	public StudentDto updateStudent(Long studentId, StudentDto studentDto) throws Exception;

	public FeeDto payFee(long studentId, FeeDto feeDto);

	public List<StudentPermitDto> getAllAppliedPermits();

	public StudentPermitDto changePermitStatus(Long permitId, String status);

	public TeacherDto postTeacher(TeacherDto teacherDto);

	public List<TeacherDto> getAllTeachers();

	public void deleteTeacher(long teacherId);

	public STeacherDto getTeacherById(long teacherId)throws Exception;

	public TeacherDto updateTeacher(long teacherId, TeacherDto teacherDto) throws Exception;
}
