import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `
    <div appTrial>
      Hover me to see the custom directive in action!
    </div><br><hr><br>
    
    <!-- app.component.html -->
    <label for="phoneNumber">Enter your phone no.</label>
<input type="text" appPhone [(ngModel)]="phoneNumber" placeholder="Enter phone number" />
<br><hr><br>
  `,
  styles: ``
})
export class CustomDirectiveComponent {
  phoneNumber: string='';
}
