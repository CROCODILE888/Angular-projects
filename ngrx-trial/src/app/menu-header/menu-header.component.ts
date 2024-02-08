import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  template: `
   <mat-toolbar  class="mat-elevation-z8">
    <span>NGRX Tutorial</span>
    <button mat-button routerLink="">Home</button>
    <button mat-button routerLink="counter">Counter</button>
    <button mat-button routerLink="blog">Blog</button>

   </mat-toolbar>
  `,
  styles: `
    mat-toolbar{
      background-color: lightgreen;
      color: white
    }
  `
})
export class MenuHeaderComponent {

}
