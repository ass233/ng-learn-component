import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  public isShow:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public toggleShow():void{
    this.isShow = !this.isShow;
  }

}
