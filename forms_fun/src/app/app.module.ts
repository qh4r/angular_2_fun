import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivernComponent } from './forms/template-drivern/template-drivern.component';
import { DataDrivenComponent } from './forms/data-driven/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TemplateDrivernComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
