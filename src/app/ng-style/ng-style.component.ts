import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  public currentStyle: {}
  public canSave:boolean=false;
  public isUnchanged:boolean=false;
  public isSpecial:boolean=false;
  public isColor:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setCurrentStyle(){
    this.currentStyle = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '36px'   : '12px',
      'color': !this.isColor ? 'red' : 'normal'
    };
  }
}
