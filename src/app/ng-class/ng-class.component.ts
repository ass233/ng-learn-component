import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  public currentClasses = {};

  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  setCurrentClasses(){
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    }
  }
}
