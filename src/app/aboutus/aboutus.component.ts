import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private _route: Router, private _router: ActivatedRoute, private _location: Location) {
    //console.log(this._route.getCurrentNavigation().extras.state); //this will not work in ngOnInit for it we can use location or history.

  }

  ngOnInit(): void {
    // this._router.queryParams.subscribe(res=>{ // this is the way to get the paramter data which is not defined in router.
    //   alert(res['firstname']);
    //   alert(res['lastname']);
    // })
    // console.log(this._location.getState()); //both used to get data from routerlink from state object
    // console.log(history.state);// state data object

  }
// issubmited(){
//   return confirm('are you sure to exit ? (about us component)');
// }
canDeactivate(){
   return confirm('are you sure to exit ? (about us component)');
  }

}
