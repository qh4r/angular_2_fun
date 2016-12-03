import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {Ingredient} from "../ingredient";
@Component({
  selector: 'cb-shopping-list-new',
  templateUrl: './shopping-list-new.component.html',
})
export class ShoppingListNewComponent implements OnInit {
  private _amount : number = 0;
  private _name : string = '';

  get itemAmount(){
    return this._amount
  }

  get itemName(){
    return this._name;
  }

  onNameChange(e){
    this._name = e.target.value;
  }

  onAmountChange(e){
    this._amount = e.target.value;
  }

  clearAll(){
    this._name = '';
    this._amount = 0;
  }

  addIngredient(){
    if(this._amount && this._name){
      this.shoppingListService.addItems([new Ingredient(this._name, this._amount)]);
      this.clearAll();
    }
  }

  constructor(private shoppingListService : ShoppingListService) {

  }


  ngOnInit() {
  }

}
