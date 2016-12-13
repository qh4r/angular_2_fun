import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipesSubscription: Subscription;
  private paramsSubscription: Subscription;
  private selectedRecipeIndex: number;
  private isNew: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.isNew = true;
    this.paramsSubscription = this.route.params.subscribe(x => {
      this.selectedRecipeIndex = +x['id'];
      if (x.hasOwnProperty('id')) {
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
