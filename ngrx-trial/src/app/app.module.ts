import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './couter/couter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/Counter/counter.reducer';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookCollectionsComponent } from './book-collections/book-collections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { blogReducer } from './shared/store/Blog/Blog.reducer';
import { AppState } from './shared/store/Global/App.state';

@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    BookListComponent,
    BookCollectionsComponent,
    CustomCounterComponent,
    CounterDisplayComponent,
    BlogComponent,
    HomeComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(AppState),
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
