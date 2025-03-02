import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent {

  studentId:number = this.activatedRoute.snapshot.params["studentId"]

  CLASS: string[] = ["1st", "2nd", "3rd", "4th"];

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  isSpinning:boolean;

  validateForm:FormGroup

  constructor(private service:AdminService,
    private fb:FormBuilder,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(){

    this.validateForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      studentClass: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })
    this.getStudentById();


  }


  getStudentById(){
    this.service.getStudentById(this.studentId).subscribe((res)=>{
      const student = res.studentDto;
      this.validateForm.patchValue(student);
      console.log(res);
    })
  }


  updateStudent(){
    this.service.updateStudent(this.studentId,this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.snackBar.open("Student attributes updated successfully","Close",{duration:5000})
      }else{
        this.snackBar.open("Student not found","Close",{duration:5000})
      }
    })
  }


}
