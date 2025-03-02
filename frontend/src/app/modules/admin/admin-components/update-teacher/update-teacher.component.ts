import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent {

  teacherId:number = this.activatedRoute.snapshot.params["teacherId"]
  GENDER: string[] = ["Male", "Female", "Not Specified"];

  validateForm: FormGroup;
  isSpinning:boolean = false;

  constructor(private service:AdminService,
    private fb:FormBuilder,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      department: ["", Validators.required],
      qualification: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })

    this.getTeacherById();
  }

  getTeacherById(){
    this.service.getTeacherById(this.teacherId).subscribe((res)=>{
      const teacher = res.teacherDto;
      this.validateForm.patchValue(teacher);
      console.log(res);
    })
  }


  updateTeacher(){
    this.service.updateTeacher(this.teacherId,this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.snackBar.open("Teacher attributes updated successfully","Close",{duration:5000})
      }else{
        this.snackBar.open("Teacher not found","Close",{duration:5000})
      }
    })
  }

}
