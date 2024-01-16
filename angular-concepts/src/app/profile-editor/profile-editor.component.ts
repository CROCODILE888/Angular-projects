import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <h3>Basic Reactive form with (form control)</h3><br>
   <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName" placeholder="First Name..."><br><br>

    <label for="middle-name">Middle Name: </label>
    <input id="middle-name" type="text" formControlName="middleName" placeholder="Middle Name..."><br><br>

    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName" placeholder="Last Name..."><br><br><hr><br>

    <div formGroupName="address">
    <label for="street">Street </label>
    <input id="street" type="text" formControlName="street" placeholder="Street..."><br><br>

    <label for="city">City </label>
    <input id="city" type="text" formControlName="city" placeholder="City..."><br><br>

    <label for="state">State </label>
    <input id="state" type="text" formControlName="state" placeholder="State..."><br><br>

    <label for="zip">Zip </label>
    <input id="zip" type="text" formControlName="zip" maxlength="6" placeholder="Zip code..."><br><br>

    </div>
    <div formArrayName="aliases">
      <h2>Aliases</h2>
      <button type="button" (click)="addAlias()">+ Add another alias</button>
      <div *ngFor="let alias of aliases.controls; let i=index">
        <label for="alias-{{i}}">Alias:</label>
        <input id="alias-{{i}}" type="text" [formControlName]="i">
      </div>
    </div>
    <p>Complete the form to enable button.</p>
 <button type="submit" [disabled]="!profileForm.valid">Submit</button>
 
 <!-- <button type="button" (click)="updateProfile()">Update profile</button> -->
 <p>Form status: {{profileForm.status}}</p>
   </form><br>

   <p>Your full name is: <h4>{{lName}} {{fName}} {{mName}}</h4><br>
   <p>Your address is: <h6>{{street}}<br>{{city}}, {{state}} <br>Zip code: {{zip}}</h6><br><hr><br>
  `,
  styles: ``
})
export class ProfileEditorComponent {
  constructor(private formBuilder: FormBuilder){}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    middleName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  fName: string | null | undefined;
  lName: string | null | undefined;
  mName: string |undefined | null;

  street: string |undefined | null;
  city: string |undefined | null;
  state: string |undefined | null;
  zip: number |undefined | null;

  onSubmit(){
    // window.alert(this.profileForm.value)
    this.fName=this.profileForm.get('firstName')?.value;
    this.lName=this.profileForm.get('lastName')?.value;
    this.mName=this.profileForm.get('middleName')?.value;

    this.street=this.profileForm.get('address.street')?.value;
    this.city=this.profileForm.get('address.city')?.value;
    this.state=this.profileForm.get('address.state')?.value;
    this.zip=Number(this.profileForm.get('address.zip')?.value);    
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.formBuilder.control(''));
  }
}
