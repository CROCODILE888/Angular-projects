import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as UsersData from '../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Un comment the following code if you have backend up and running
  // constructor(private http: HttpClient) { }

  // apiUrl="http://localhost:3000/users";

  // getUsers():Observable<{users: Users[]}>{
  //   return this.http.get<{users: Users[]}>(this.apiUrl);
  // }


  private usersData: Users[] = (UsersData as any).users;

  getUsers(): Observable<{ users: Users[] }> {
    return of({ users: this.usersData });
  }

}
