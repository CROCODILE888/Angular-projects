import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BookApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  template: `
    <app-menu-header></app-menu-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BookApiActions.retrievedBookList({ books }))
      );
  }
}
