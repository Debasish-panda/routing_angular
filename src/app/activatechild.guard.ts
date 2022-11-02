import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildGuard implements CanActivateChild {
  constructor(private _router:Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isloggedin:boolean=false;
    if(!isloggedin){
      alert('access denied not auth user for student');
      this._router.navigate(['home']);
      return false;
    }
      return true;
  }
  
}
