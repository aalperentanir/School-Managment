package com.alialperen.schoolmanagment.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.alialperen.schoolmanagment.dto.SStudentDto;
import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.dto.StudentPermitDto;
import com.alialperen.schoolmanagment.entities.StudentPermit;
import com.alialperen.schoolmanagment.entities.User;
import com.alialperen.schoolmanagment.enums.StudentPermitStatus;
import com.alialperen.schoolmanagment.repository.StudentPermitRepository;
import com.alialperen.schoolmanagment.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImp implements StudentService {
	
	private final UserRepository userRepository;

	private final StudentPermitRepository studentPermitRepository;
	
	
	@Override
	public SStudentDto getStudentById(long id) throws Exception {
		Optional<User> opt = userRepository.findById(id);
		
		if(opt.isPresent()) {
			SStudentDto sDto = new SStudentDto();
			sDto.setStudentDto(opt.get().getStudentDto());
			return sDto;
		}
		throw new Exception("User not found with this "+ id+" id");
	}


	@Override
	public StudentPermitDto applyPermit(StudentPermitDto studentPermitDto) {
		Optional<User> opt = userRepository.findById(studentPermitDto.getUserid());
		
		if(opt.isPresent()) {
			StudentPermit studenPermit = new StudentPermit();
			studenPermit.setSubject(studentPermitDto.getSubject());
			studenPermit.setDate(new Date());
			studenPermit.setBody(studentPermitDto.getBody());
			studenPermit.setStudentPermitStatus(StudentPermitStatus.Pending);
			studenPermit.setUser(opt.get());
			StudentPermit submittedStudentPermit = studentPermitRepository.save(studenPermit);
			StudentPermitDto studentPermitDto1 = new StudentPermitDto();
			studentPermitDto1.setId(submittedStudentPermit.getId());			
			return studentPermitDto1;
		}
		return null;
	}


	@Override
	public List<StudentPermitDto> getAllAppliedPermitsById(long studentId) {
		// TODO Auto-generated method stub
		return studentPermitRepository.findAllByUserId(studentId).stream().map(StudentPermit::getStudentPermitDto).collect(Collectors.toList());
	}


	@Override
	public StudentDto updateStudent(long studentId, StudentDto studentDto) throws Exception {
Optional<User> opt = userRepository.findById(studentId);
		
		if(opt.isPresent()) {
			User user = opt.get();
			user.setName(studentDto.getName());
			user.setAddress(studentDto.getAddress());
			user.setBirthDate(studentDto.getBirthDate());
			user.setEmail(studentDto.getEmail());
			user.setGender(studentDto.getGender());
			user.setStudentClass(studentDto.getStudentClass());
			
			User updatedUser = userRepository.save(user);
			StudentDto updatedDto = new StudentDto();
			updatedDto.setId(updatedUser.getId());
			
			return updatedDto;
		}
		
		throw new Exception("User doesn't exist");

	}


}
	


