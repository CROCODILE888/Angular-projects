import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  template: `
   <div style="text-align: center;">
      <h1>Welcome to ngrx trial!</h1>
  
    <app-couter></app-couter>
    <app-custom-counter></app-custom-counter>
  </div><br>

    <!-- <h2>Books</h2>
<app-book-list class="book-list" [books]="(books$ | async)!" (add)="onAdd($event)"></app-book-list>

<h2>My Collection</h2>
<app-book-collections class="book-collection" [books]="(bookCollection$ | async)!" (remove)="onRemove($event)">
</app-book-collections> -->
  `,
  styles: ``
})
export class CounterDisplayComponent {

}
