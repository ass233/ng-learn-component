import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  public currentWife:any = {name:"我媳妇是亭亭玉立的小红花"}
  constructor() { }

  ngOnInit() {
  }

}
