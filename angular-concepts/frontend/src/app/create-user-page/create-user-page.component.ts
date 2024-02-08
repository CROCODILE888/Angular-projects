import { Component } from '@angular/core';
// import { UserAuthenticationService } from '../user-authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user-page',
  template: `
    <div class="container">
      <div class="wrapper-form">
        <form>
          <h1>Create User</h1>
          <label for="email">Username</label>
          <input type="text" name="email" id="email" placeholder="username" [(ngModel)]="username" required/>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            [(ngModel)]="password"
            required
          />
          <div class="error-message" *ngIf="errorMessage; else elseblock">{{errorMessage}}</div>
          <ng-template #elseblock style="color: green;">{{message}}</ng-template>
          <button type="submit" value="LOGIN" (click)="createUser()">Create user</button>
          
        </form>
      </div>
    </div>
  `,
  styles: `
   html {
    font-family: sans-serif;
    line-height: 1.15;
  }
  
  .container {
    width: 100%;
    height: 100%;
  }
  .error-message {
    color: red;
  }
  ng-template{
    color: green;
  }
  .wrapper-form {
    width: 25%;
    margin: 200px auto 0 auto;
    border: 0.6px solid #e0e0e0;
    border-radius: 12px;
    padding: 25px 0px 25px 0px;
    box-shadow: 4px 4px 11px 0px #e0e0e0;
  }
  
  h1 {
    margin-top: 0px;
    text-align: center;
  }
  
  form {
    display: grid;
    margin: auto;
    width: 70%;
  }
  
  label {
    color: #423e3d;
    font-weight: bold;
  }
  
  input {
    margin: 10px 0px 10px 0px;
    padding: 0.8em 0.8em;
    border: 0.6px solid #e0e0e0;
    border-radius: 4px;
  }
  
  input:focus {
    outline: #32a8a6 auto 3px;
  }
  
  input[type="submit"] {
    color: white;
    background-color: #32a8a6;
    font-size: 18px;
    padding: 0.6em;
  }
  
  p.message {
    margin: 0;
    font-size: 12px;
    text-align: center;
    color: #7d7d7d;
    margin-top: 8px;
  }
  
  p > a {
    color: #32a8a6;
    text-decoration: none;
  }
  `
})
export class CreateUserPageComponent {

  constructor (private http: HttpClient){}
  username: string ='';
  password: number | string = '';
  message: string = '';
  errorMessage: string = '';

  createUser (){
    if(!this.username || !this.password){
      this.errorMessage="Please enter both, username and password.";
      return;
    }

    this.http.post<any>('http://localhost:3000/create-user', {userName: this.username, password: this.password}).subscribe(
      (response)=>{
        this.message=response.msg;
        console.log(this.message);
      },
      (error)=>{
        console.error(error);
        this.errorMessage= 'Invalid credentials. Please try again';
      }
    );
  }
}
