import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  allBooks:Book[]=[];

  constructor(private _bookservice:BookService) { }

  ngOnInit(): void {
    this.getallBooks();
  }

  getallBooks(){
    this._bookservice.getBooks().subscribe(obj=>{
      this.allBooks=obj;
    })
  }

}
