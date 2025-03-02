import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn:"root"
})

export class studentGuard implements CanActivate{
  
  constructor(
    private router:Router,
    private snackbar:MatSnackBar
  ){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
    if(StorageService.isAdminLoggedIn()){
      this.router.navigateByUrl("/adnin/dashboard");
      this.snackbar.open("You dont have acess this page ","Close",{duration:5000});
      return false;
    }else if(!StorageService.hasToken()){
      StorageService.logout();
      this.router.navigateByUrl("/login");
      this.snackbar.open("You are not logged in","Close",{duration:5000});
      return false;
    }
    return true;
  }



};
