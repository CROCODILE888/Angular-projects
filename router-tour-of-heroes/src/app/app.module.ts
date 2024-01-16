import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrisisModule } from './crisis-center/crisis.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    BrowserAnimationsModule,
    CrisisModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
