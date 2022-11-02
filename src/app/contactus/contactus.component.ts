import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe(res=>{
      console.log(res);
    })
  }

  canDeactivate(){
    return confirm('are you sure to exit ? (Contact us component)');
   }

}
