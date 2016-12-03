import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {Ingredient} from "../ingredient";
@Component({
  selector: 'cb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.shoppingListService.itemsChange.subscribe(items => {
      this.items = items;
    })
  }

}
