import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../../ingredient';

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectionChanged = new EventEmitter<Recipe>();
  recepies: Array<Recipe> = [];

  constructor() {
  }

  ngOnInit() {
    this.recepies.push(new Recipe("test", "pierwszy przepis", "#", [
      new Ingredient('pietruszka', 100),
      new Ingredient('rzepa', 100),
      new Ingredient('marchew', 100)
    ]));
    this.recepies.push(new Recipe("test2", "drugi przepis", "#", [
      new Ingredient('kurczak', 20),
      new Ingredient('jarmusz', 80)
    ]));
  }

  onSelected(recipe: Recipe) {
    this.recipeSelectionChanged.emit(recipe);
  }
}
