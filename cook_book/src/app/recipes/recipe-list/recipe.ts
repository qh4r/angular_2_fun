// ng g cl recipe
import {Ingredient} from '../../ingredient';

export class Recipe {
  constructor(public name, public desc, public imagePath, public ingredients: Ingredient[]){

  }
}
