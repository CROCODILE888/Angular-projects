import { Component } from '@angular/core';
import { customincrement, increment } from '../shared/store/Counter/counter.actions';
import { Store } from '@ngrx/store';
import { CounterModel } from '../shared/store/Counter/counter.model';

@Component({
  selector: 'app-custom-counter',
  template: `
  
    <mat-card>
    <mat-card-content>
      <mat-form-field>
        <label>Counter Input</label>
        <input matInput [(ngModel)]="counterInput">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Action Type</mat-label>
        <mat-select [(ngModel)]="actionType">
          <mat-option value="add">Add</mat-option>
          <mat-option value="remove">Remove</mat-option>
        </mat-select>
        
      </mat-form-field>
      <br>
      <button mat-fab color="primary" (click)="increment()">+ / -</button>
      </mat-card-content>
    </mat-card>
    
  `,
  styles: `
    .mdc-card{
      width: 30%;
      margin-left: 35%
    }
    .mat-mdc-form-field{
      width: 100%
    }
  `
})
export class CustomCounterComponent {

  constructor(private store: Store<{ counter: CounterModel}>) { }

  counterInput!: number;
  actionType="add";
  increment() {
    this.store.dispatch(customincrement({ value: +this.counterInput, action: this.actionType }));
  }
}
