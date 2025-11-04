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
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private recipeService: RecipeService) {
  }
  
  ngOnInit() {
    this.getRecipeList();
  }

  showData(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe);
  }

  clearSelectedRecipe() {
    this.selectedRecipe = null;
  }

  getRecipeList() {
    this.isLoading = true;
    this.errorMessage = null;

    this.recipeService.getAllRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No se pudieron obtener las recetas. Inténtalo de nuevo.';
        this.isLoading = false;
      }
    });
  }
}
