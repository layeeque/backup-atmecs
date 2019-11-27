import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor( private _router : Router) { }

  ngOnInit() {
  }
  exit(){
    this._router.navigate(['events'])
  }
}
