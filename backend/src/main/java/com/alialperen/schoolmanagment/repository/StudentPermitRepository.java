package com.alialperen.schoolmanagment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alialperen.schoolmanagment.entities.StudentPermit;

public interface StudentPermitRepository extends JpaRepository<StudentPermit, Long> {

	List<StudentPermit> findAllByUserId(long studentId);

}
