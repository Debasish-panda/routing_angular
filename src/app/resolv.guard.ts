import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})

export class ResolvGuard implements Resolve<Book> {
  constructor(private _bookservice: BookService, private _router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    let id = route.params['id'];
    return this._bookservice.getBook(id).map(book => {
      if (book) {
        return book;
      } else {
        alert('no data found');
        this._router.navigate(['book']);
        return null;
      }
    })
  }

}
