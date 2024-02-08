import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipes } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://dummyjson.com/recipes"

  getRecipes (): Observable<{recipes: Recipes[]}>{
    return this.http.get<{recipes: Recipes[]}>(this.apiUrl);
  }
}
