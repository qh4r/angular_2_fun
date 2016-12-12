import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {Ingredient} from './ingredient';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  itemsChange: Observable<Ingredient[]>;
  private observer: Observer<any>;

  getItems() {
    return this.items;
  }

  addItems(items : Ingredient[]) {
    this.items = [...this.items, ...items];
    this.onItemsChange();
  }

  addItem(item : Ingredient) {
    this.items = [...this.items, item];
    this.onItemsChange();
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    console.log(oldItem, newItem);
    let oldIndex = this.items.indexOf(oldItem);
    if(oldIndex > -1) {
      console.log(this.items, oldIndex)
      this.items = [...this.items.filter((item,i) => i!= oldIndex), newItem];
      this.onItemsChange();
    }
  }

  deleteItem(itemToDelete: Ingredient) {
    let toDeleteIndex = this.items.indexOf(itemToDelete);
    if(toDeleteIndex > -1) {
      console.log(this.items, toDeleteIndex)
      this.items = [...this.items.filter((item,i) => i!= toDeleteIndex)];
      this.onItemsChange();
    }
  }

  private onItemsChange(){
    if(this.observer) {
      this.observer.next(this.items);
    }

  }

  constructor() {
    this.itemsChange = Observable.create(o => {
      console.log('const shopping service')
      this.observer = o;
      this.onItemsChange();
    });
  }

}
