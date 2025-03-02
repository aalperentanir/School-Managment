package com.alialperen.schoolmanagment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alialperen.schoolmanagment.entities.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
