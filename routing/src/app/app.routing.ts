import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: Routes = [
  {path: 'user', redirectTo: 'user/1', pathMatch:'full'},
  {path: 'user/', redirectTo: 'user/1', pathMatch:'full'}, // z / i bez to inne sciezki!!!!
  // patch match full sprawia ze user nie bedzie przechwytywalo sciezek ktore zawieraja cos wiecej  niz /user
  {path: 'user/:id', component: UserComponent },
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
