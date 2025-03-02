import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { StorageService } from '../storage/storage.service';


const BASIC_URL = ["http://localhost:8080/"]

export const AUTH_HEADER = "Authorization";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private storage:StorageService) { }

  login(email:string,password:string):Observable<any>{
    return this.http.post(BASIC_URL + "auth/authenticate",{
      email,
      password
    },{observe:"response"})
    .pipe(
      tap(__ => this.log("User Authentication")),
      map((res: HttpResponse<any>) => {
        this.storage.saveUser(res.body);
      
        let bearerToken = '';
        
        // Öncelikle Authorization başlığını kontrol edelim
        const authHeader = res.headers.get(AUTH_HEADER);
        if (authHeader) {
          const tokenLength = authHeader.length;
          bearerToken = authHeader.substring(7, tokenLength);
        } else if (res.body.token) {
          // Eğer başlık yoksa, body içindeki token'ı alalım
          bearerToken = res.body.token;
        } else {
          console.error("Authorization header and token in body are missing!");
        }
        
        if (bearerToken) {
          this.storage.saveToken(bearerToken);
        }
      
        return res;
      })
    )
  }

  log(message:string){
    console.log(message);
  }
}
