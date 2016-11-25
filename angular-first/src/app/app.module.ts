import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './app.test.component';
import { OtherComponent } from './other/other.component';
import { AndOtherComponent } from './and-other.component';
import { StringFunComponent } from './string-fun/string-fun.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/twoWayBindingComponent.ts';

@NgModule({
  // jakie dyrykytywy i pipey wykorzystujemy
  declarations: [
    AppComponent, TestComponent, OtherComponent, AndOtherComponent, StringFunComponent, DatabindingComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent
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
