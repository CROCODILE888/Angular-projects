import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipes } from '../recipes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  template: `
    @defer () {
      <div *ngIf="recipe">
    <h3><a (click)="goBack()">{{recipe.name}}</a></h3><br><hr>
    <h4> Ingredients: </h4><br><h5>
      <ul *ngFor="let ingredient of recipe?.ingredients">
        <li>{{ingredient}}</li>
</ul>
    </h5><br><hr>
    <h4> Instructions: </h4><br>
    <div *ngFor="let instruction of recipe?.instructions; let i = index">
      <p>{{i+1}}. {{instruction}}</p>
</div>
    <button type="button" (click)="goBack()">Back to all Recipes</button>
  </div>
}

  @placeholder {
    <p>Whole recipe will appear here</p>
  }
  @loading(minimum 2s) {
    
    <h5 *ngIf="recipe">Getting you this delicious {{recipe.name}} recipe..</h5>
  }<br><br><hr><br>
  `,
  styles: ``
})
export class RecipeDetailsComponent implements OnInit{
  recipes: Recipes[]=[];
  recipe: Recipes | undefined;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private location: Location){}
  ngOnInit(): void {
    const recipeIdFromRoute = Number(this.route.snapshot.paramMap.get("recipeId"));
    this.recipesService.getRecipes().subscribe((response: any)=>{
      this.recipes=response.recipes;

      this.recipe= response.recipes.find((recipe:any) => recipe.id === recipeIdFromRoute);
      // console.log('ingredients >>>>>', 'instructions >>>>>', this.recipe?.instructions)
    })   
}
  goBack(){
    this.location.back();
  }
}
