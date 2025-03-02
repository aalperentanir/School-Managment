package com.alialperen.schoolmanagment.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alialperen.schoolmanagment.dto.StudentDto;
import com.alialperen.schoolmanagment.entities.User;
import com.alialperen.schoolmanagment.enums.UserRole;

public interface UserRepository extends JpaRepository<User,Long> {

	User findByRole(UserRole admin);

	Optional<User> findByEmail(String email);

	List<User> findAllByRole(UserRole student);



}
