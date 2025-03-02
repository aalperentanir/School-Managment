import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrl: './post-teacher.component.scss'
})
export class PostTeacherComponent {

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  validateForm: FormGroup;
  isSpinning:boolean = false;

  constructor(private service:AdminService,
    private fb:FormBuilder,
    private snackBar:MatSnackBar
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
  }

  postTeacher(){
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addTeacher(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Teacher added successfully","Close",{duration:5000});
      }else{
        this.snackBar.open("Teacher already exist","Close",{duration:5000})
      }
    })
  }

}
