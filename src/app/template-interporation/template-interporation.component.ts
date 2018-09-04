import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-template-interporation',
  templateUrl: './template-interporation.component.html',
  styleUrls: ['./template-interporation.component.scss']
})
export class TemplateInterporationComponent implements OnInit {
  public gameTile:string="好好学习Angular";
  constructor() { }

  ngOnInit() {
  }
  public gameNo():string{
    return '我不玩游戏'
  }

}
