import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-forms',
  template: `
    <label for="name">Name: </label>
    <input id="name" type="text" [formControl]="name">
    <p>The name is {{name.value}}</p><span>// using form control to display the input element</span><br><br>
    <button (click)="updateName()" type="button">Update name</button><span>// using formControl's setValue method to update the value</span>
    <br><hr><br>
  `,
  styles: ``
})
export class InputFormsComponent {
  name= new FormControl('');
    updateName(){
      this.name.setValue("Batul");
    }
} 
