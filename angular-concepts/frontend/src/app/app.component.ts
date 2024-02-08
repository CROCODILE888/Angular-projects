import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-login-page></app-login-page> -->
<!-- <app-home></app-home> -->
<router-outlet></router-outlet>


 <!--   -->

  <!-- <h1 i18n >Internationalization text: It is the text that will be converted into different language according to the locale
    you are in; this was created on {{"15-01-24" | date}} and this is the currency example {{50 | currency}}
  </h1> -->
  `,
  styles: `:host{color: #a144eb}
  .hehe{
    border:solid black
  }
span{
color: rgb(15, 62, 15);
font-size: large;
}`
})
export class AppComponent {
  
}
