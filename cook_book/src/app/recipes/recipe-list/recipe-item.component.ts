import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';
@Component({
  selector: 'cb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {
  recipeId : number;
  recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
