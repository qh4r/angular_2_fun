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
