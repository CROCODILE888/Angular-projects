import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collections',
  template: `
    <div 
  class="book-item"
  *ngFor="let book of books"
>
  <p>{{book.volumeInfo.title}}</p><span> by {{book.volumeInfo.authors}}</span>
  <button
    (click)="remove.emit(book.id)"
    data-test="remove-button"
  >Remove from Collection</button>
</div>
  `,
  styles: ``
})
export class BookCollectionsComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
