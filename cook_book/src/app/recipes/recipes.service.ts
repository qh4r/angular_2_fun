import {Injectable} from '@angular/core';
import {Recipe} from './recipe-list/recipe';
import {Observable, Observer} from 'rxjs';
import {Ingredient} from '../ingredient';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [];
  recipesStream: Observable<Recipe[]>;
  private observer: Observer<any>;

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged();
  }

  getRecipes() {
    return this.recipes;
  }

  private recipesChanged() {
    console.log('update');
    this.observer.next(this.recipes);
  }

  constructor() {
    // to cow  create jest callbackiem wiec zostanie wywolane po
    // zakonczeniu dzialania konstruktora
    this.recipesStream = Observable.create(o => {
      this.observer = o;
      this.recipesChanged();
    });
    // this.recipesStream.share();
    this.recipes.push(new Recipe("test", "pierwszy przepis", "#", [
      new Ingredient('pietruszka', 100),
      new Ingredient('rzepa', 100),
      new Ingredient('marchew', 100)
    ]));
    this.recipes.push(new Recipe("test2", "drugi przepis", "#", [
      new Ingredient('kurczak', 20),
      new Ingredient('jarmusz', 80)
    ]));
  }
}
