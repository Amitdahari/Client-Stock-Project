import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:57056/api/users/getusers');
  }

  addUser(user:any): Observable<any>{
    return this.httpClient.post('http://localhost:57056/api/users/addUser', user);
  }

}
