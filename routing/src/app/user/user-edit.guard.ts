import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard<T extends ComponentCanDeactivate> implements CanDeactivate<ComponentCanDeactivate> {

  // route: ActivatedRouteSnapshot, state: RouterStateSnapshot - to mozna wykomentowac i zadziala ....
  canDeactivate(component: T): Observable<boolean>|boolean {
    return component.canDeactivate ? component.canDeactivate() : true; //wywoluje can deactivate jesli moze a inaczej puszcza
  }

}
