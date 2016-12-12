import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from "../ingredient";
@Component({
  selector: 'cb-shopping-list-new',
  templateUrl: './shopping-list-new.component.html',
})
export class ShoppingListNewComponent implements OnInit, OnChanges {

  @Output() itemCleared : EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: any): void {
    console.log('changes', changes);
    if(changes.item && changes.item.currentValue == null) {
      this.isAdd = true;
      this.workingItem = new Ingredient('', 0);
    } else {
      this.workingItem = new Ingredient(changes.item.currentValue.name, changes.item.currentValue.amount);
      this.isAdd = false;
    }
  }

  workingItem : Ingredient = new Ingredient('', 0);
  @Input() item: Ingredient;
  isAdd = true;

  onSubmit(form){
    if(this.isAdd) {
      this.shoppingListService.addItem(new Ingredient(form.value.name, form.value.amount));
    } else {
      this.shoppingListService.editItem(this.item, new Ingredient(form.value.name, form.value.amount));
    }
    this.clearItem();
    form.reset(); // niestety jedyne co powoduje update zbindowanego template first do pol
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
  }

  clearItem(){
    this.itemCleared.emit(null);
    this.workingItem = new Ingredient('', 0);
    console.log('clear');
  }

  constructor(private shoppingListService : ShoppingListService) {

  }


  ngOnInit() {
  }

}
