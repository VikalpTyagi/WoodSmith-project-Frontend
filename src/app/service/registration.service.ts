import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService { 
  url:string="http://localhost:8086/api/v1/register";
  url2:string="http://localhost:8086/api/v1/login";

  public logged:boolean=false;

  constructor(private httpconnection:HttpClient) { }

  postForm(data:any):Observable<any>{
    return this.httpconnection.post(this.url,data);
  }

  logIn(data:any):Observable<any>{
    return this.httpconnection.post(this.url2,data);
  }
  
 logout(){
  this.logged=false;
 }

}