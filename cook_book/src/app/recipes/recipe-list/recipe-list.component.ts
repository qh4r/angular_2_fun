import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectionChanged = new EventEmitter<Recipe>();
  recipes: Array<Recipe> = [];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipesService.recipesStream.subscribe(recipes => {
      this.recipes = recipes;
      console.log(recipes);
    });
    console.log('list initialized');
  }

  onSelected(recipe: Recipe) {
    this.recipeSelectionChanged.emit(recipe);
  }
}
