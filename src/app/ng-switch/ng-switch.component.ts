import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwichComponent implements OnInit {
  public mapStatus:number = 1
  constructor() { }

  ngOnInit() {
  }

}
