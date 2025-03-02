package com.alialperen.schoolmanagment.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alialperen.schoolmanagment.dto.FeeDto;
import com.alialperen.schoolmanagment.dto.SStudentDto;
import com.alialperen.schoolmanagment.dto.STeacherDto;
import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.dto.StudentPermitDto;
import com.alialperen.schoolmanagment.dto.TeacherDto;
import com.alialperen.schoolmanagment.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
	
	
	private final AdminService adminService;
	
	
	@PostMapping("/student")
	public ResponseEntity<StudentDto> addStudent(@RequestBody StudentDto studentDto) throws Exception {
		StudentDto createdDto = adminService.postStudent(studentDto);
		
		if(createdDto == null) {

			throw new Exception("Something went wrong");
			
		}
		return new ResponseEntity<>(createdDto, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/students")
	public ResponseEntity<List<StudentDto>> getAllStudents(){
		List<StudentDto> students = adminService.getAllStudents();
		
		return ResponseEntity.ok(students);
	}
	
	@DeleteMapping("/student/{id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable long id){
		adminService.deleteStudent(id);
		
		return ResponseEntity.noContent().build();
	}
	
	
	@GetMapping("/student/{studentId}")
	public ResponseEntity<SStudentDto> getStudentById(@PathVariable long studentId) throws Exception{
		SStudentDto dto = adminService.getStudentById(studentId);
		
		if(dto == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(dto);
	}
	
	
	@PutMapping("/student/{studentId}")
	public ResponseEntity<?> updateStudent(@PathVariable long studentId, @RequestBody StudentDto studentDto) throws Exception{
		StudentDto createdDto = adminService.updateStudent(studentId, studentDto);
		
		if(createdDto == null) {
			return new ResponseEntity<>("Something went wrong",HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(createdDto);
	}

	
	@PostMapping("/fee/{studentId}")
	public ResponseEntity<?> addFee(@RequestBody FeeDto feeDto,@PathVariable long studentId){
		FeeDto paidFeeDto = adminService.payFee(studentId,feeDto);
		
		if(paidFeeDto == null) {
			return new ResponseEntity<>("Someting went wrong",HttpStatus.BAD_REQUEST);
			
			
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(paidFeeDto);
	}
	
	@GetMapping("/permits")
	public ResponseEntity<List<StudentPermitDto>> getAllApliedPermitsByStudentId() throws Exception{
		List<StudentPermitDto> studentPermitDtos = adminService.getAllAppliedPermits();
		
		if(studentPermitDtos == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(studentPermitDtos);
	}
	
	@GetMapping("/permit/{permitId}/{status}")
	public ResponseEntity<?> changePermitStatus(@PathVariable Long permitId,@PathVariable String status) throws Exception{
		StudentPermitDto studentPermitDtos = adminService.changePermitStatus(permitId,status);
		
		if(studentPermitDtos == null) {
			return  new ResponseEntity<>("Someting went wrong",HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(studentPermitDtos);
	}
	
	
	@PostMapping("/teacher")
	public ResponseEntity<?> addTeacher(@RequestBody TeacherDto teacherDto){
		TeacherDto createdDto = adminService.postTeacher(teacherDto);
		
		if(createdDto == null) {
			return new ResponseEntity<>("Someting went wrong",HttpStatus.BAD_REQUEST);
			
			
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(createdDto);
	}
	
	@GetMapping("/teachers")
	public ResponseEntity<List<TeacherDto>> getAllTeachers(){
		List<TeacherDto> teachers = adminService.getAllTeachers();
		
		return ResponseEntity.ok(teachers);
	}
	
	@DeleteMapping("/teacher/{teacherId}")
	public ResponseEntity<Void> deleteTeacher(@PathVariable long teacherId){
		adminService.deleteTeacher(teacherId);
		
		return ResponseEntity.noContent().build();
	}
	
	
	@GetMapping("/teacher/{teacherId}")
	public ResponseEntity<STeacherDto> getTeacherById(@PathVariable long teacherId) throws Exception{
		STeacherDto dto = adminService.getTeacherById(teacherId);
		
		if(dto == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(dto);
	}
	
	@PutMapping("/teacher/{teacherId}")
	public ResponseEntity<?> updateTeacher(@PathVariable long teacherId, @RequestBody TeacherDto teacherDto) throws Exception{
		TeacherDto createdDto = adminService.updateTeacher(teacherId, teacherDto);
		
		if(createdDto == null) {
			return new ResponseEntity<>("Something went wrong",HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(createdDto);
	}

}
