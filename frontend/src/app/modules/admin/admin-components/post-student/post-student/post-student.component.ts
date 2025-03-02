import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.scss'
})
export class PostStudentComponent {

  CLASS: string[] = ["1st", "2nd", "3rd", "4th"];

  GENDER: string[] = ["Male", "Female", "Not Specified"];


  isSpinning: boolean;
  validateForm: FormGroup;


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.validateForm.controls["password"].value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  constructor(
    private service: AdminService,
    private fb: FormBuilder,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      password: ["", Validators.required],
      checkPassword: ["", Validators.required,this.confirmationValidator],
      studentClass: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })
  }

  postStudent() {
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addStudent(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Student added successfully","Close",{duration:5000});
      }else{
        this.snackBar.open("Student already exist","Close",{duration:5000})
      }
    })
  }


}
