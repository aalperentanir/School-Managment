import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { adminGuard } from '../../auth/guards/admin/admin.guard';
import { PostStudentComponent } from './admin-components/post-student/post-student/post-student.component';

import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllPermitsComponent } from './admin-components/all-permits/all-permits.component';
import { PostTeacherComponent } from './admin-components/post-teacher/post-teacher.component';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { AllTeachersComponent } from './admin-components/all-teachers/all-teachers.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate:[adminGuard]},
  {path:"student",component:PostStudentComponent, canActivate:[adminGuard]},
  {path:"students",component:AllStudentsComponent, canActivate:[adminGuard]},
  {path:"student/:studentId",component:UpdateStudentComponent, canActivate:[adminGuard]},
  {path:"fee/:studentId",component:PayFeeComponent, canActivate:[adminGuard]},
  {path:"permits",component:AllPermitsComponent, canActivate:[adminGuard]},
  {path:"teacher",component:PostTeacherComponent, canActivate:[adminGuard]},
  {path:"teachers",component:AllTeachersComponent, canActivate:[adminGuard]},
  {path:"teacher/:teacherId",component:UpdateTeacherComponent, canActivate:[adminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
