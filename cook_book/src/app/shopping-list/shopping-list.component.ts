import {Component, OnInit, OnDestroy} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from "../ingredient";
import {Subscription} from "rxjs";
@Component({
  selector: 'cb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  items: Ingredient[] = [];
  private shopppingListSubscription : Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
   this.shopppingListSubscription = this.shoppingListService.itemsChange.subscribe(items => {
      this.items = items;
    })
  }

  ngOnDestroy(): void {
    this.shopppingListSubscription.unsubscribe();
  }

}
