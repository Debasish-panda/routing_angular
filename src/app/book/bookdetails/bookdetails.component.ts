import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { Location } from '@angular/common'; //this imported to use goback

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  bookdetails: Book;


  constructor(private _activateroute: ActivatedRoute, private _bookservice: BookService, private _loaction: Location) { } //location used to use go back angular provide this library

  ngOnInit(): void {
    //1.(route.snapshot.param
    //alert(this._activateroute.snapshot.params['id']);
    //this._bookservice.getBook(this._activateroute.snapshot.params['id']).subscribe(res=>this.bookdetails =res);

    //2.route.snapshot.paramMap
    //alert(this._activateroute.snapshot.paramMap.get('id')); //here id return sting but in service we passed number;
    // this._bookservice.getBook(parseInt(this._activateroute.snapshot.paramMap.get('id'))).subscribe(res=>this.bookdetails =res); //here parseInt used as id will return string but service we mentioned number.

    //3.route.params.subscribe
    // this._activateroute.params.subscribe(res => {
    //   //alert(res['id']);
    //   this._bookservice.getBook(res['id']).subscribe(res => this.bookdetails = res);
    // })

    //3.route.paramMap.subscribe
    this._activateroute.paramMap.subscribe(res => {
         //alert(res.get('id'));
         this._bookservice.getBook(parseInt(res.get('id'))).subscribe(res => this.bookdetails = res);
       })

  }


  goback() {
    this._loaction.back();// used for goback
  }
}
