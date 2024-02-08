import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <h2>All the basic features: </h2><br><hr><br>
    <div *ngIf="isServerRunning; else elseBlock">
  Yes, server is running. <span>// using *ngif</span>
</div><br><hr><br>

<ng-template #elseBlock>
  No, server is not running: <span>//using else after creating ng-template //and template reference variable</span>
</ng-template>

<div *ngFor="let user of users">
    <p>{{user.name}} <span>// using *ngFor</span></p>
  </div><br><hr><br>

  <div [attr.contenteditable]="isEditable" class="hehe"><span>//to demonstrate property binding using [](two way binding too)</span></div>  
  <br><hr><br>

  <section (mouseover)="revealName()">What's my name? Hover to reveal!{{message}} <span>// to demonstrate event binding using ()</span></section>
  <br><hr><br>

  <app-first name = "Taha" (addNewItem)="addItem($event)"/>
  <p>down to {{arr.length}} <span>//demonstrating communication between components // OUTPUT()</span></p>
  <br><hr><br>
  
  <p><span>// implementing deferrable components with (on interaction trigger)</span></p>
  <button type="button" #greeting>Hello!</button>
  @defer (on interaction(greeting)) {
    <app-comments />
  }
  @placeholder (){
    <p>Comments will appear here</p>
  }
  @loading (minimum 2s){
    <h5>Loading...</h5>
  }
  @defer (on hover(greeting)) {
    <app-comments />
  }
  <br><hr><br>
  `,
  styles: ``
})
export class BasicComponent {
  arr=new Array();
  addItem(item: string){
    this.arr.push(item)
  }
  // title = 'angular-trial';
  // city = "San Francisco";
  isServerRunning=true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable=true;
  message="";
  revealName(){
    this.message="My name is Taha";
  }
}
