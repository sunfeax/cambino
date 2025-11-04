import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../../models/recipes';
import { RecipeService } from '../../services/recipeService';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css'],
  standalone: true
})

export class Recipes {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {
  }
  
  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  showData(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe);
  }

  clearSelectedRecipe() {
    this.selectedRecipe = null;
  }
}
