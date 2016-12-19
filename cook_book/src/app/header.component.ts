import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipesService} from "./recipes/recipes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html',
  styles: [
    `ul.nav>li>.highlight  {
        color: #ff6771; !important
    } `
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private recipesStoreSubscription : Subscription;

  ngOnDestroy(): void {
    this.recipesStoreSubscription.unsubscribe();
  }

  constructor(private recipesService: RecipesService) { }

  onStoreRecipes(){
    this.recipesStoreSubscription = this.recipesService.storeRecipes().subscribe(x => console.log('stored!', x));
  }

  onLoadRecipes(){
    this.recipesService.fetchRecipes();
  }



  ngOnInit() {
  }

}
