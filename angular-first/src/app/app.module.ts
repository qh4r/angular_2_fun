import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './app.test.component';
import { OtherComponent } from './other/other.component';
import { AndOtherComponent } from './and-other.component';

@NgModule({
  // jakie dyrykytywy i pipey wykorzystujemy
  declarations: [
    AppComponent, TestComponent, OtherComponent, AndOtherComponent
  ],
  // mowi jakie inne moduly na ktorych ten modul polega
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // serwisy dostepne dla calej apki
  providers: [],
  bootstrap: [AppComponent, TestComponent, AndOtherComponent]
})
export class AppModule { }
