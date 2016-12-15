import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DirectivesComponent} from './directives/directives.component';
import {HighlightDirective} from './directives/highlight.directive';
import {HoverHighlightDirective} from './directives/hover-highlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {ListComponent} from './list/list.component';
import {InputsComponent} from './inputs/inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { DuplicatePipe } from './pipes/duplicate.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective,
    HoverHighlightDirective,
    UnlessDirective,
    ListComponent,
    InputsComponent,
    PipesComponent,
    DuplicatePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
