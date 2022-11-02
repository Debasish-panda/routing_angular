import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isloggedin:boolean=false;
      if(!isloggedin){
        alert('not logged in person !!');
        this._router.navigate(['home']); //router object need to use to use navigate. if no logged in person then it will navigate to home
        return false;
      }
    return true;
  }
  
}
