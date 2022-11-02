import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  gotoabout() {
    // let _navigationextras: NavigationExtras = {
    //   queryParams: {
    //     firstname: 'debasish',
    //     lastname: 'panda'
    //   }
    // }
    // this._router.navigate(['aboutus'], _navigationextras);

    //above code have another way with out NavigationExtras used below.

    // this._router.navigate(['aboutus'], {
    //   queryParams: {
    //     firstname: 'debasish',
    //     lastname: 'panda'
    //   }
    // })
  }
}
