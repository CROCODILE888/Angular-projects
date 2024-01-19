import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  apiUrl="http://localhost:3000/users";

  getUsers():Observable<{users: Users[]}>{
    return this.http.get<{users: Users[]}>(this.apiUrl);
  }
}
