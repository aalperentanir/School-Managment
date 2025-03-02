import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup | undefined;
  constructor(
    private service:AuthService,
    private fb:FormBuilder,
    private router:Router,
    private snackbar:MatSnackBar
  ){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    console.log(this.loginForm.value);
    console.log("Admin LoggedIn",StorageService.isAdminLoggedIn())
    this.service.login(this.loginForm.get(['email'])!.value,
                       this.loginForm.get(['password'])!.value
    ).subscribe((response) =>{
      console.log(response);

      if(StorageService.isAdminLoggedIn()){
        
        this.router.navigateByUrl("admin/dashboard")
      }else if(StorageService.isStudentLoggedIn()){
        this.router.navigateByUrl("student/dashboard");
      }

    })
    error =>{
      if(error.status == 406){
        this.snackbar.open("User not found","Close",{
          duration:5000
        });
      }else{
        this.snackbar.open("Bad credentials","Close",{
          duration:5000
        })
      }
    }
  }
}
 