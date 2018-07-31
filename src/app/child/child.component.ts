import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name:string="Child Title";
  style:string="style1";
  textcolor:string="lightblue";
  items:string[]=["IDE","Compiler","Debugger","OS"];
  constructor() { }

  ngOnInit() {
  }

  changeColor(p:string):void{
    this.style=(p=="t1")?"style1":"style2";
  }
}
