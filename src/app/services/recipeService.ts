import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe, RecipeListResponse } from '../models/recipes';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
  constructor(private httpClient: HttpClient) {
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.httpClient
      .get<RecipeListResponse>('https://dummyjson.com/recipes')
      .pipe(map((response) => response.recipes));
  }
}
