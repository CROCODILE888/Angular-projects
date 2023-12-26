import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" class="listing-photo"/>
      <section class="lising-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Available Units: {{housingLocation?.availableUnits}}</li>
          <li>Is WiFi available? {{housingLocation?.wifi}}</li>
          <li>Is laundry available? {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here! </h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name: </label>
          <input type="text" id="first-name" formControlName="firstName">

          <label for="last-name">Last Name: </label>
          <input type="text" id="last-name" formControlName="lastName">

          <label for="email">Email: </label>
          <input type="email" id="email" formControlName="email">
          <button class="primary" type="submit">Apply here! </button>
        </form>
       
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  // housingLocationId = 0;
  housingService= inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor(){
    // console.log(this.route.snapshot.params);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
  });
}
  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
}
}
