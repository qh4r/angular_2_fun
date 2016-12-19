import {Injectable} from '@angular/core';
import {Recipe} from './recipe-list/recipe';
import {Observable, Observer} from 'rxjs';
import {Ingredient} from '../ingredient';
import {Router} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";

const recipesUrl = "https://cook-book-33937.firebaseio.com/recipes.json";

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [];
  recipesStream: Observable<Recipe[]>;
  private observer: Observer<any>;

  addRecipe(recipe: Recipe) {
    this.recipes = [...this.recipes, recipe];
    this.recipesChanged();
    console.log('new',recipe);
  }

  getRecipes() {
    return this.recipes;
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes = [...this.recipes.filter(x => x != oldRecipe), newRecipe];
    console.log('edited',newRecipe);
    this.recipesChanged();
  }

  getRecipe(index: number) : Recipe {
    return this.recipes && this.recipes.length && this.recipes[index]
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
    this.recipesChanged();

  }

  private recipesChanged() {
    console.log('update');
    if(this.observer){
      this.observer.next(this.recipes);
    }
    this.router.navigate(['/recipes']);
  }

  constructor(private router: Router, private http: Http) {
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

  storeRecipes(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(recipesUrl, body, {
      headers
    });
  }

  fetchRecipes(){
    return this.http.get(recipesUrl)
      .map((response: Response) => response.json())
      .subscribe((data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged();
      })
  }
}
