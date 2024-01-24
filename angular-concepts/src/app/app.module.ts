import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FirstComponent } from './first/first.component';
import { InputFormsComponent } from './input-forms/input-forms.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { TrialDirective } from './trial.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhoneDirective } from './phone.directive';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    CommentsComponent,
    CustomDirectiveComponent,
    FirstComponent,
    InputFormsComponent,
    ProfileEditorComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    TrialDirective,
    PhoneDirective,
    UsersComponent,
    UserDetailsComponent,
    LoginPageComponent,
    CreateUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
