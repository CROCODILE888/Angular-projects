import { createReducer, on } from "@ngrx/store";
import { BookApiActions } from "./books.actions";
import { Book } from "../book-list/books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BookApiActions.retrievedBookList, (_state, {books})=>books)
);