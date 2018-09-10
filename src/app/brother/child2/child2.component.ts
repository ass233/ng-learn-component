import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/service.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public events:Array<any>=[]

  constructor(public eventBusService:EventBusService) { }

  ngOnInit() {
    this.eventBusService.eventBus.subscribe((value)=>{
      this.events.push(value+'-'+new Date());
    })
  }

}
