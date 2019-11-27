import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['parentdata'],
  outputs:['childdata']
})

export class ChildComponent  {
public parentdata:string;
childdata = new EventEmitter<string>();
onchange(value:string)
{
  this.childdata.emit(value);
} 

}
