// ng g cl recipe
import {Ingredient} from '../../ingredient';

export class Recipe {
  constructor(public name: string, public desc: string, public imagePath: string, public ingredients: Ingredient[]) {

  }
}
