import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public childdata:string;
  name="pipe operator is here";
  num=1.57;
  date=new Date();
}
