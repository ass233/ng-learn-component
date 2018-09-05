import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.scss']
})
export class TemplateRefVarComponent implements OnInit {
  public LocalVariable:string='闫晓婷是大美女！'
  constructor() { }

  ngOnInit() {
  }

  public sayHello(name:string):void{
    alert(name);
  }

}
