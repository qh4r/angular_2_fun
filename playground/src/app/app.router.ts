
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HttpComponent} from "./http/http.component";

const ROUTES : Routes = [
  { path: '', component: HomeComponent},
  { path: 'http', component: HttpComponent}
];

export const router = RouterModule.forRoot(ROUTES);
