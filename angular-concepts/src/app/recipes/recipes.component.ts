import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  template: `
    <h3>Recipes: </h3><span><p>// using httpClient and httpClientModule to fetch json data from external api</p></span>

@defer () {
<div *ngFor="let recipe of recipes">
 <ul><h6><u><li><a [title]="recipe.name +' recipe'" [routerLink]="['/recipes', recipe.id]">{{recipe.name}}</a></li></u></h6></ul>
 <!-- <h5>{{recipe.ingredients}}</h5>
 <p>{{recipe.instructions}}</p>
 <hr> -->
</div>}
@placeholder {
 <p>Recipes will appear here:</p>
}
@loading (minimum 2s){
 <h4>Getting you all the recipes..</h4>
}<br><br><hr><br>
  `,
  styles: `span{
    color: rgb(15, 62, 15);
    font-size: large;
  }`
})
export class RecipesComponent implements OnInit{
  constructor(private recipesService: RecipesService){}

   recipes: Recipes[]=[]
  
  ngOnInit(): void {
      this.recipesService.getRecipes().subscribe((response: any)=>{
        this.recipes=response.recipes;
      })
    
  }
  
}
