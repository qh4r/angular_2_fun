// ng g component recipes

import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-list/recipe';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'cb-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeSelectionUpdate(recipe: Recipe) {
    this.selectedRecipe = recipe
  }

}
