import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {
  // title = 'router-tour-of-heroes';
  constructor(private contexts: ChildrenOutletContexts){};

  getAnimationsData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
