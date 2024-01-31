import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../shared/store/counter.actions';

@Component({
  selector: 'app-couter',
  template: `
   
   <div>Current count: {{count$ | async}}</div>
   <button mat-raised-button color="primary" (click)="increment()">Increment</button>
   <button mat-raised-button color="accent" (click)="decrement()">Decrement</button>
   <button mat-raised-button color="warn" (click)="reset()">Reset</button>
  `,
  styles: `button{
    margin: 2px;
  }`
})
export class CouterComponent {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>){
    this.count$ = store.select('count')
  };

  increment (){
    this.store.dispatch(increment())
  };

  decrement (){
    this.store.dispatch(decrement())
  };

  reset (){
    this.store.dispatch(reset())
  };
}
