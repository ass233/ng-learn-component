import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  public wifes:Array<any> = [
      {name:"闫晓婷"},
      {name:"杨玉环"},
      {name:"西施"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
