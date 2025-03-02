import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';



const BASIC_URL =  ["http://localhost:8080/api/admin/"]
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addStudent(studentDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+"student",studentDto,{
      headers: this.createAuthorizationHeader(),
    });
   
  }

  getAllStudents():Observable<any>{
    return this.http.get<[]>(BASIC_URL+"students",{
      headers:this.createAuthorizationHeader()
    })
  }

  deleteStudent(id:any):Observable<any>{
    return this.http.delete<[]>(BASIC_URL+`student/${id}`,{
      headers:this.createAuthorizationHeader()
    })
  }
  
  getStudentById(studentId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`student/${studentId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateStudent(studentId:number,studentDto:any):Observable<any>{
    return this.http.put<[]>(BASIC_URL+`student/${studentId}`,studentDto,{
      headers:this.createAuthorizationHeader(),
    });
  }

  getAllAppliedPermits():Observable<any>{
    return this.http.get<[]>(BASIC_URL+`permits`,{
      headers:this.createAuthorizationHeader()
    })
  }

  changePermitStatus(permitId:number,status:string):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`permit/${permitId}/${status}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  addTeacher(teacherDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+"teacher",teacherDto,{
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteTeacher(teacherId:any):Observable<any>{
    return this.http.delete<[]>(BASIC_URL+`teacher/${teacherId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  getAllTeachers():Observable<any>{
    return this.http.get<[]>(BASIC_URL+"teachers",{
      headers:this.createAuthorizationHeader()
    })
  }

  getTeacherById(teacherId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`teacher/${teacherId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateTeacher(teacherId:number,teacherDto:any):Observable<any>{
    return this.http.put<[]>(BASIC_URL+`teacher/${teacherId}`,teacherDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  

  createAuthorizationHeader():HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization","Bearer "+ StorageService.getToken()
    );
  }

  payFee(studentId:number,feeDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+`fee/${studentId}`,feeDto,{
      headers: this.createAuthorizationHeader(),
    });
   
  }
}
