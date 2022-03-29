import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginuser(username:any,password:any){
    console.log("service function called");
    return this.http.post<any>("http://cw-dev-api.logicplum.com/api/v2/user/login",{
      "username": username,
      "password": password
      })
  }
}
