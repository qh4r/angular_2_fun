import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from './recipe';
import {RecipesService} from '../recipes.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {

  @Output() recipeSelectionChanged = new EventEmitter<Recipe>();
  recipes: Array<Recipe> = [];
  private recipesSubscription : Subscription;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipesSubscription = this.recipesService.recipesStream.subscribe(recipes => {
      this.recipes = recipes;
      console.log(recipes);
    });
    console.log('list initialized');
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
}
