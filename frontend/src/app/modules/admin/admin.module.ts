import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PostStudentComponent } from './admin-components/post-student/post-student/post-student.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import {MatCardModule} from '@angular/material/card';
import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllPermitsComponent } from './admin-components/all-permits/all-permits.component';
import {MatMenuModule} from '@angular/material/menu';
import { PostTeacherComponent } from './admin-components/post-teacher/post-teacher.component';
import { AllTeachersComponent } from './admin-components/all-teachers/all-teachers.component';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostStudentComponent,
    AllStudentsComponent,
    UpdateStudentComponent,
    PayFeeComponent,
    AllPermitsComponent,
    PostTeacherComponent,
    AllTeachersComponent,
    UpdateTeacherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
