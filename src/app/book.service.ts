import { Injectable } from '@angular/core';
import { Observable, of, map, observable } from 'rxjs';
import { Book } from './book';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private Books: Book[] = [
    { id: 100, name: 'angular 10', price: 400, description: 'Angular Book' },
    { id: 101, name: 'react', price: 300, description: 'React Book' },
    { id: 102, name: 'Javascript', price: 500, description: 'JS Book' },
    { id: 103, name: 'Java', price: 100, description: 'Java Book' },
  ]

 // constructor() { }
 // booklist= Observable.of(this.Books); // code used for resolve guard
 // bookdisplay =this.Books.concat({ id: 104, name: 'python', price: 30, description: 'python Book' }); //resolve guard


  getBooks():Observable<Book[]>{ // from normal data to we convert into observable type data
    
   return of(this.Books);
   // return Observable.of(this.Books); //above return code is same but this line used for import 'rxjs-compat/add/observable/of' else by of operator also work same, not working in angular 14
   // return Observable.of(this.bookdisplay); // used for resolve guard
  }

  getBook(id:number):Observable<Book>{
    // debugger;
    return this.getBooks().pipe(map(obj => obj.find(res=>res.id == id))); //here getting error if we use only map
    //return this.booklist.pipe(map(obj => obj.find(res=>res.id == id))); //used for resolve guard
  }


  
}
