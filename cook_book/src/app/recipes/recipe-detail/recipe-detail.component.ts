import { Component, OnInit, Input } from '@angular/core';

import {Recipe} from '../recipe-list/recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'cb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  onAddToShoppingList(ingredients){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
  }
}
