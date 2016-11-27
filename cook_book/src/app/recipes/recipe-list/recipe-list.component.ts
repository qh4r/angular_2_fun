import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe';

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
    this.recepies.push(new Recipe("test", "pierwszy przepis", "#"));
    this.recepies.push(new Recipe("test2", "drugi przepis", "#"));
  }

  onSelected(recipe: Recipe){
    this.recipeSelectionChanged.emit(recipe);
  }
}
