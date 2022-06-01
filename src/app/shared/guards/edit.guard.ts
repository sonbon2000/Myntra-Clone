import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface EditGuard {
  canExit: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EditGuard implements CanDeactivate<EditGuard> {
  canDeactivate(
    component: EditGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit();
  }
}
