import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { InputFormsComponent } from './input-forms/input-forms.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes/:recipeId', component: RecipeDetailsComponent},
  {path: 'form', component: ProfileEditorComponent},
  {path: 'input', component: InputFormsComponent},
  {path: 'custom-directive', component: CustomDirectiveComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
