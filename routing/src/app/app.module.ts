import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import {routing} from "./app.routing";
import {UserDetailGuard} from "./user/user-detail.guard";
import {UserEditGuard} from "./user/user-edit.guard";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
