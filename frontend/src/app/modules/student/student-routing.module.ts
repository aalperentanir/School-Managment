import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './student-components/dashboard/dashboard/dashboard.component';
import { studentGuard } from '../../auth/guards/student/student.guard';
import { ApplyPermitComponent } from './student-components/student-permit/apply-permit/apply-permit.component';
import { GetAllPermitsComponent } from './student-components/get-all-permits/get-all-permits.component';
import { UpdateStudentComponent } from './student-components/update-student/update-student.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate:[studentGuard]},
  {path:"permit",component:ApplyPermitComponent, canActivate:[studentGuard]},
  {path:"permits",component:GetAllPermitsComponent, canActivate:[studentGuard]},
  {path:"update",component:UpdateStudentComponent, canActivate:[studentGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
