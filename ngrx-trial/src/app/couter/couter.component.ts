import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, resetChannelName } from '../shared/store/Counter/counter.actions';
import { CounterModel } from '../shared/store/Counter/counter.model';
import { AppStateModel } from '../shared/store/Global/App.model';

@Component({
  selector: 'app-couter',
  template: `
   
   <div>Current count: {{(counter$ | async)?.counter}}</div>
   <button mat-raised-button color="primary" (click)="increment()">Increment</button>
   <button mat-raised-button color="accent" (click)="decrement()">Decrement</button>
   <button mat-raised-button color="warn" (click)="reset()">Reset</button>
   <button mat-raised-button color="warn" (click)="rename()">Rename</button>
   <div><h3>{{(counter$ | async)?.channelName}}</h3></div>
  `,
  styles: `button{
    margin: 2px;
  }`
})
export class CouterComponent implements OnInit, OnDestroy{

  constructor(private store: Store<AppStateModel>){
    // this.count$ = store.select('count')
  }
  
  increment (){
    this.store.dispatch(increment())
  };
  
  decrement (){
    this.store.dispatch(decrement())
  };
  
  reset (){
    this.store.dispatch(reset())
  };

  rename(){
    this.store.dispatch(resetChannelName({channel: "Welcome to COCO TECHOES"}))
  }
  counterDisplay!: number;
  channelName= '';
  counterSubscribe !: Subscription;
  counter$!: Observable<CounterModel>;
  
  ngOnInit(): void {
    //using async pipe
    this.counter$=this.store.select('counter')
    
    //using traditional way of subscribing
    // this.counterSubscribe=this.store.select('counter').subscribe(data=>{
      //   this.counterDisplay=data.counter;
      //   this.channelName=data.channelName;
      // })
    }
  //earlier used traditioanl subscribing, therefore used this method to unsubscribe
  ngOnDestroy(): void {
    // if (this.counterSubscribe){
    //   this.counterSubscribe.unsubscribe
    // }
  };
}
  