import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'localhost:8080/details/all';
  constructor(private http:HttpClient) { }

  public registerForm(model){
    return this.http.post(`${this.baseUrl}`, model,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(`${this.baseUrl}`);
  }

  public getUsersbyId(id:number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  public deleteUser(id){
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' as 'json'});
  }

  
}

