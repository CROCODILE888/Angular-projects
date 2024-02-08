import { booksReducer } from "../../../state/books.reducer";
import { collectionReducer } from "../../../state/collection.reducer";
import { blogReducer } from "../Blog/Blog.reducer";
import { counterReducer } from "../Counter/counter.reducer";

export const AppState={
    counter: counterReducer,
    blog: blogReducer,
    books: booksReducer, 
    collection: collectionReducer
}