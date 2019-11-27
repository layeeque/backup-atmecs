import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {
 myname="Md Faiz ur Rehman";
  constructor() { }

  ngOnInit() {
  }
  onsubmit(val:any)
  {
    console.log(val.name);
  }

}
