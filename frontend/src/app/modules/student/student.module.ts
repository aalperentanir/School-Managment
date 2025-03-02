import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './student-components/dashboard/dashboard/dashboard.component';
import { ApplyPermitComponent } from './student-components/student-permit/apply-permit/apply-permit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAllPermitsComponent } from './student-components/get-all-permits/get-all-permits.component';
import { UpdateStudentComponent } from './student-components/update-student/update-student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplyPermitComponent,
    GetAllPermitsComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
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
  ]
})
export class StudentModule { }
