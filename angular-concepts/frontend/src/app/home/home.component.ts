import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HOME</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" routerLink="recipes" routerLinkActive="clicked">Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="form" routerLinkActive="clicked">Trial Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="input" routerLinkActive="clicked">Input feature</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="custom-directive" routerLinkActive="clicked">Custom Directive</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="users" routerLinkActive="clicked">Users</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" routerLink="create-user" routerLinkActive="clicked">Create user</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" routerLink="basic" routerLinkActive="clicked">Basic features</a>
        </li>
      </ul>
    </div>
  </div>
</nav><br>
<h1>Hey there! Welcome to my angular project where I showcase all the features I've learned of ANGULAR 17</h1>
<router-outlet></router-outlet>
  `,
  styles: `.clicked{
    background-color: #a144eb;
  }`
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
      console.log("Home component");
  }
}
