import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact = "contactus";
  title = 'routing';
  constructor(private _router: Router) { }
  ngOnInit(){
    // this.dynamicdata();
  }

  // gotocontact() {
  //   //this._router.navigate(['contactus']); //button server side navigation where we need to import Router and its method navigate need to use and need to pass parameter which one we want to display.
  //   this._router.navigate(['contactus', 503]);
  // }
  // dynamicdata() {
  //   this._router.navigateByUrl("abouotus", { state: { empcode: 1111, empname: 'debu panda' } }); // not working
  // }

}
