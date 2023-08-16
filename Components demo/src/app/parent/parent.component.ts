import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title1:string="Parent component"
  title:string="Passing data parent to child";

  constructor() { }

  ngOnInit(): void {
  }

}
