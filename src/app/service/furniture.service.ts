import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../Furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  url:string="http://localhost:8081/api/v2/furniture"
  url2:string="http://localhost:8081/api/v2/furniture/save"
  url3:string="http://localhost:8081/api/v2/furniture/delete"
  url4:string="http://localhost:8081/api/v2/furniture/update"
  url5:string="http://localhost:8081/api/v2/furniture/one"

  constructor(private httpclient:HttpClient) { }


  getAllFurniture():Observable<Furniture[]>
  {
      return this.httpclient.get<Furniture[]>(this.url);
  }
  addFurniture(data:any):Observable<any>
  {
      return this.httpclient.post(this.url2,data);
  }
  getOneFurniture(id:any):Observable<any>{
    return this.httpclient.get(this.url5+"/"+id)
  }
  editFurniture(id:any,note:any)
  {
    return this.httpclient.put(this.url4+"/"+id,note);
  }
  deleteFurniture(id:any)
  {
    return this.httpclient.delete(this.url3+"/"+id);
  }
}
