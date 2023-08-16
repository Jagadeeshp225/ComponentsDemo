import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="Bio-data";
 details=
  {
  Firstname:"jagadish",
  Age:25,
  course:"CSE"
  };
  Change()
  {
    this.details.Firstname=this.details.Firstname;
    this.details.Age=this.details.Age
    this.details.course=this.details.course;
  }
}
