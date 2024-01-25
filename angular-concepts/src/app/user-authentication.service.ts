import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http: HttpClient, private router: Router) { };

  username: string ='';
  password: string = '';
  message: string = '';
  errorMessage: string = '';

  login(){}

}
