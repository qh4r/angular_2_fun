import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {Recipe} from '../recipe-list/recipe';
import {ShoppingListService} from '../../shopping-list.service';
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private paramsSubscription : Subscription;
  private selectedRecipeId : number;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private activeRoute: ActivatedRoute) {
    console.log('details const', shoppingListService);
  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
    this.paramsSubscription = this.activeRoute.params.subscribe(x => {
      this.selectedRecipeId = +x['id'];
      this.selectedRecipe = this.recipesService.getRecipe(this.selectedRecipeId);
    })
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
