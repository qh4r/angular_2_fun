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
import {LogService} from './log.service';
import {DataStoreService} from './data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective,
    HoverHighlightDirective,
    UnlessDirective,
    ListComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService, DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
