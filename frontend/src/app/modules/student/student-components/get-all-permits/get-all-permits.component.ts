import { Component } from '@angular/core';
import { StudentService } from '../student-service/student.service';

@Component({
  selector: 'app-get-all-permits',
  templateUrl: './get-all-permits.component.html',
  styleUrl: './get-all-permits.component.scss'
})
export class GetAllPermitsComponent {

  isSpinning = false;
  permits: any;

  constructor(
    private studentService:StudentService
  ){}

  ngOnInit():void{
    this.getAllPermits();
  }

  getAllPermits(){
    this.isSpinning = true;
    this.studentService.getAllAppliedPermitsById().subscribe((res) =>{
      console.log(res);
      this.isSpinning = false;
      this.permits = res;
    })
  }

}
