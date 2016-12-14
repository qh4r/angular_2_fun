import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe-list/recipe";
import {FormArray, FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Ingredient} from "../../ingredient";

@Component({
  selector: 'cb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipesSubscription: Subscription;
  private recipe: Recipe;
  private paramsSubscription: Subscription;
  private selectedRecipeIndex: number;
  private isNew: boolean;
  private formBuilder: FormBuilder;

  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router : Router) {
    this.formBuilder = new FormBuilder();
  }

  onSubmit() {
    let newRecipe : Recipe = this.recipeForm.value;
    console.log('submit', newRecipe);
    if(this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.goBack();
  }

  ngOnInit() {
    this.isNew = true;
    this.paramsSubscription = this.route.params.subscribe(x => {
      if (x.hasOwnProperty('id')) {
        this.selectedRecipeIndex = +x['id'];
        this.recipe = this.recipeService.getRecipe(this.selectedRecipeIndex);
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    });
    this.initForm();
  }

  goBack(){
    this.router.navigate(['../']);
  }

  onRemoveIngredient(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(1);
  }

  onAddIngredient(ingredient: Ingredient){
    (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup({
      name: new FormControl(ingredient.name, Validators.required),
      amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('\\d+')])
    }));
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeImgUrl = '';
    let recipeDescription = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      this.recipe.ingredients.forEach((x: Ingredient)=> {
        recipeIngredients.push(new FormGroup({
          name: new FormControl(x.name, [Validators.required]),
          amount: new FormControl(x.amount, [
            Validators.required,
            Validators.pattern("\\d+")])
        }));
      });
      recipeName = this.recipe.name;
      recipeImgUrl = this.recipe.imagePath;
      recipeDescription = this.recipe.desc;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, [Validators.required]],
      imagePath: [recipeImgUrl, [Validators.required]],
      desc: [recipeDescription, [Validators.required]],
      ingredients: recipeIngredients
    });
  }
}
