import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/service.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor( public eventBusService:EventBusService) { }

  ngOnInit() {
  }

  public triggerEventBus():void{
      this.eventBusService.eventBus.next('第一个子组件出发的事件');
  }

}
