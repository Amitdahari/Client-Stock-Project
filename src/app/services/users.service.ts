import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:57056/api/users/getusers').pipe(catchError(this.handleError('error')));;
  }

  addUser(user:User): Observable<any>{
    return this.httpClient.post('http://localhost:57056/api/users/addUser', user).pipe(catchError(this.handleError('error')));;
  }

  private handleError(operation: String) {
    return (err: any) => {
        let errMsg = `error`;
        console.log(`${errMsg}:`, err)
       debugger
       return throwError(err)
    }
}

  getUserbyId(idKey:string): Observable<any>{
    return this.httpClient.get(`http://localhost:57056/api/users/getuser/${idKey}`).pipe(catchError(this.handleError('error')));
  }
  
  getUserbyPhone(phone:string): Observable<any>{  
    return this.httpClient.get(`http://localhost:57056/api/users/getUsersbyPhone/${phone}`).pipe(catchError(this.handleError('error')));
  }

  updateUser(user: User): Observable<any>{
    return this.httpClient.put(`http://localhost:57056/api/users/updateUser/${user.IdKey}`, user).pipe(catchError(this.handleError('error')));
  }
}
